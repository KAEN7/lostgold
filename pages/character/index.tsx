import axios from "axios";
import type { NextPage } from "next";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loadingState, searchCharacterList } from "../../store";
import { color, flexCenterDir } from "../../styles/theme";

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

	const onSubmitHandler = async (e: any, name: string) => {
		e.preventDefault();

		await axios
			.get("/api/characters", { params: { data: name } })
			.then((data) => console.log("data", data.data));
	};

	return (
		<CharacterSection>
			<CharacterList>
				{searchList.map((char: charSetup) => (
					<li>
						<span>{char.ServerName}</span>
						<span>{char.CharacterClassName}</span>
						<span>{char.CharacterLevel}</span>
						<span>{char.ItemMaxLevel}</span>
						<span>{char.CharacterName}</span>
					</li>
				))}
			</CharacterList>
		</CharacterSection>
	);
};

const CharacterSection = styled.main`
	${flexCenterDir}

	width: 100%;
	height: 100%;
`;

const CharacterList = styled.ul`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 50%;
	padding: 1rem;
	box-sizing: border-box;
	background: ${color.gray};
	border-radius: 10px;

	li {
		display: flex;
		flex-direction: column;
		width: 8rem;
		background: ${color.black};
		margin: 1rem;
		color: ${color.white};
	}
`;

const DetailSection = styled.div`
	display: flex;
	flex-direction: column;
`;

export default Index;
