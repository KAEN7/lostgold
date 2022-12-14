import type { NextPage } from "next";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Loading from "../components/atoms/Loading";

import { loadingState } from "../store";
import { color, flexCenter, flexCenterDir } from "../styles/theme";

const Index: NextPage = () => {
	const [loading, setLoading] = useRecoilState(loadingState);
	const [name, setName] = useState("");

	const onSubmitHandler = () => {};

	return (
		<MainSection>
			{/* 이미지 아니면 three.js */}
			{/* <img /> */}

			<SearchBox onSubmit={() => onSubmitHandler()}>
				<input
					placeholder="검색할 캐릭터명을 입력해주세요"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button>GOLD ICON</button>
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
	width: 40rem;
	height: 3.5rem;
	border-radius: 5rem;
	background: ${color.gray};
`;

export default Index;
