import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Loading from "../components/atoms/Loading";

import { loadingState, nameState, searchCharacterList } from "../store";
import { color, flexCenterDir } from "../styles/theme";

const Index: NextPage = () => {
	const [loading, setLoading] = useRecoilState(loadingState);
	const [searchList, setSearchList] = useRecoilState(searchCharacterList);
	const [name, setName] = useRecoilState(nameState);
	const [warning, setWarning] = useState(false);

	const router = useRouter();

	const onSubmitHandler = async (e: any, name: string) => {
		e.preventDefault();
		setLoading(true);

		await axios
			.get("/api/characters", { params: { data: name } })
			.then(({ data }) => {
				if (data.data) {
					setSearchList(data.data);
					setLoading(false);
					router.push("/character");
				} else {
					setWarning(true);
					setLoading(false);
				}
			})
			.catch((err) => console.error("characters API ERROR", err));
	};

	return (
		<MainSection>
			{/* 이미지 아니면 three.js */}
			{/* <img /> */}

			<SearchBox onSubmit={(e) => onSubmitHandler(e, name)} warning={warning}>
				<input
					placeholder="검색할 캐릭터명을 입력해주세요"
					value={name}
					onChange={(e) => setName(e.target.value)}
					autoFocus
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

interface ISearchBox {
	warning: boolean;
}

const SearchBox = styled.form<ISearchBox>`
	display: flex;
	width: 40rem;
	height: 3.5rem;
	margin-top: 15rem;
	padding: 0.5rem 3rem;
	box-sizing: border-box;
	border: ${(props) => props.warning && `1px solid ${color.point}`};
	box-shadow: ${(props) => props.warning && `0px 2px 20px ${color.point}`};
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

		&::selection {
			background: ${color.darkGray};
		}
	}

	button {
		font-size: 1.5rem;
		font-weight: bold;
		color: ${color.subPoint};
		cursor: pointer;
	}
`;

export default Index;
