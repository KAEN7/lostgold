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
			<>test Home page</>
		</HomeSection>
	);
};

export default Index;
