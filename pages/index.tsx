// 홈 메인화면

import type { NextPage } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { pageDefault, scrollBar } from "../styles/theme";

const HomeSection = styled.section`
	${pageDefault}
`;

const Index: NextPage = () => {
	return (
		<HomeSection>
			<Header title="home" />
			<h2>내 한달 골드 수입을 한눈에 확인해보세요!</h2>
		</HomeSection>
	);
};

export default Index;
