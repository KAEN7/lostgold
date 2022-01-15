import { useState } from "react";
import styled from "styled-components";
import { flexCenter, color } from "../styles/theme";

const HomeSection = styled.header`
	${flexCenter}

	width: 100%;
	height: 100%;
`;

function Home() {
	return <HomeSection>test Home page</HomeSection>;
}

export default Home;
