import { useEffect, useState } from "react";
import axios from "axios";
import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { useQuery } from "react-query";
import {
	armoriesState,
	loadingState,
	nameState,
	searchCharacterList,
} from "../../store";
import { color, flexCenterDir, overflowY } from "../../styles/theme";

import Profiles from "./Profiles";

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
	const [name, setName] = useRecoilState(nameState);
	const [searchList, setSearchList] = useRecoilState(searchCharacterList);
	const [armories, setArmories] = useState<any>({});

	const onDetailHandler = async (name: string) => {
		setLoading(true);
		setName(name);

		await axios
			.get("/api/armories", { params: { data: name } })
			.then(({ data }) => {
				console.log("Armories API data", data.data);
				setArmories(data.data);
			});

		setLoading(false);
	};

	const { status, data, error } = useQuery<any>("armories", async () =>
		onDetailHandler(name)
	);

	if (status === "loading") {
		return <span>Loading...</span>;
	}

	if (status === "error") {
		// return <span> Error: {error.messgae}</span>;
	}

	return (
		<CharacterSection>
			<CharacterList>
				{searchList.map((char: charSetup) => (
					<CharacterItem
						name={name === char.CharacterName}
						onClick={() => onDetailHandler(char.CharacterName)}
						key={char.CharacterName}
					>
						<div>
							<span>{char.ServerName}</span>
							<span>{char.CharacterClassName}</span>
						</div>

						<span className="name">{char.CharacterName}</span>

						<div>
							<span>I.L {char.ItemMaxLevel}</span>
							<span>C.L {char.CharacterLevel}</span>
						</div>
					</CharacterItem>
				))}
			</CharacterList>

			<CharacterDetail>
				<Profiles
					profiles={armories?.profiles}
					equipment={armories?.equipment}
					collectibles={armories?.collectibles}
				/>
			</CharacterDetail>
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
	width: 50rem;
	padding: 1rem;
	box-sizing: border-box;
	background: ${color.gray};
	border-radius: 10px;
	margin-bottom: 3rem;
`;

interface ICharacterItem {
	name: boolean | any;
}

const CharacterItem = styled.li<ICharacterItem>`
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

	${(props) =>
		props.name &&
		css`
			background-color: #2ea977;
			box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
			transform: translateY(-7px);
		`}

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
`;

const CharacterDetail = styled.div`
	display: flex;
	flex-direction: column;
	width: 50rem;
`;

export default Index;
