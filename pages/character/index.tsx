import axios from "axios";
import type { NextPage } from "next";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loadingState, searchCharacterList } from "../../store";
import { color, flexCenterDir, overflowY } from "../../styles/theme";

interface charSetup {
	CharacterClassName: string;
	CharacterLevel: number;
	CharacterName: string;
	ItemAvgLevel: string;
	ItemMaxLevel: string;
	ServerName: string;
}

const Index: NextPage = () => {
	const [loading, setLoading] = useRecoilState(loadingState);
	const [searchList, setSearchList] = useRecoilState(searchCharacterList);

	console.log("searchList", searchList);

	const onDetailHandler = async (e: any, name: string) => {
		e.preventDefault();
		setLoading(true);

		await axios
			.get("/api/armories", { params: { data: name } })
			.then((data) => {
				console.log("data", data.data);
				setLoading(false);
			});
	};

	return (
		<CharacterSection>
			<CharacterList>
				{searchList.map((char: charSetup) => (
					<li onClick={(e) => onDetailHandler(e, char.CharacterName)}>
						<div>
							<span>{char.ServerName}</span>
							<span>{char.CharacterClassName}</span>
						</div>

						<span className="name">{char.CharacterName}</span>

						<div>
							<span>I.L {char.ItemMaxLevel}</span>
							<span>C.L {char.CharacterLevel}</span>
						</div>
					</li>
				))}
			</CharacterList>

			<CharacterDetail></CharacterDetail>
		</CharacterSection>
	);
};

const CharacterSection = styled.main`
	${flexCenterDir}
	${overflowY}

	width: 100%;
	height: 100%;
`;

const CharacterList = styled.ul`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 50%;
	padding: 1rem;
	box-sizing: border-box;
	background: ${color.gray};
	border-radius: 10px;
	margin-bottom: 3rem;

	li {
		display: flex;
		flex-direction: column;
		width: 12rem;
		border-radius: 14px;
		background: ${color.black};
		margin: 1rem;
		padding: 1rem;
		color: ${color.white};
		cursor: pointer;
		box-shadow: 0px 0.5px 20px ${color.black};
		transition: all 0.3s ease 0s;

		&:hover {
			background-color: #2ea977;
			box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
			transform: translateY(-7px);
		}

		div {
			display: flex;
			justify-content: space-between;
			width: 100%;
		}

		.name {
			font-size: 1.1rem;
			font-weight: bold;
			margin-top: 1rem;
			margin-bottom: 2rem;
		}
	}
`;

const CharacterDetail = styled.div`
	display: flex;
	flex-direction: column;
	background: ${color.gray};
`;

export default Index;
