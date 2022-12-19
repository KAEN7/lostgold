import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loadingState } from "../../store";
import { flexCenter } from "../../styles/theme";

const Index: NextPage = () => {
	const [loading, setLoading] = useRecoilState(loadingState);

	return <MainSection></MainSection>;
};

const MainSection = styled.main`
	${flexCenter}

	width: 100%;
	height: 100%;
`;

export default Index;
