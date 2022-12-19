import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Loading from "../components/atoms/Loading";

import { loadingState, searchCharacterList } from "../store";
import { color, flexCenterDir } from "../styles/theme";

const Index: NextPage = () => {
	const [loading, setLoading] = useRecoilState(loadingState);
	const [searchList, setSearchList] = useRecoilState(searchCharacterList);
	const [name, setName] = useState("");
	const router = useRouter();

	const onSubmitHandler = async (e: any, name: string) => {
		e.preventDefault();
		setLoading(true);

		await axios
			.get("/api/characters", { params: { data: name } })
			.then(({ data }) => {
				console.log("data", data.data);
				setSearchList(data.data);
				setLoading(false);
				router.push("/character");
			});
	};

	return (
		<MainSection>
			{/* 이미지 아니면 three.js */}
			{/* <img /> */}

			<SearchBox onSubmit={(e) => onSubmitHandler(e, name)}>
				<input
					placeholder="검색할 캐릭터명을 입력해주세요"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button>.G</button>
			</SearchBox>
		</MainSection>
	);
};

const MainSection = styled.main`
	${flexCenterDir}

	width: 100%;
	height: 100%;
`;

const SearchBox = styled.form`
	display: flex;
	width: 40rem;
	height: 3.5rem;
	margin-top: 15rem;
	padding: 0.5rem 3rem;
	box-sizing: border-box;
	border-radius: 5rem;
	background: ${color.gray};

	input {
		width: 100%;
		background: none;
		outline: none;
		border: none;
		font-size: 1rem;
		color: ${color.white};
		letter-spacing: 1.1px;
	}

	button {
		font-size: 1.5rem;
		font-weight: bold;
		color: ${color.subPoint};
		cursor: pointer;
	}
`;

export default Index;
