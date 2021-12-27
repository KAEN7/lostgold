import React from "react";
import styled from "styled-components";
import MainSection from "../components/MainSection";
import Goldpage from "../page/Goldpage";
import SectionBtn from "../components/SectionBtn";

const MainSectionBox = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

const MainpageList = styled.ul`
	display: flex;
	flex-direction: column;
	li {
		cursor: auto;
	}
`;

function Mainpage() {
	return (
		<MainSectionBox>
			<SectionBtn />
			<MainpageList>
				<MainSection />
				<Goldpage />
			</MainpageList>
		</MainSectionBox>
	);
}

export default Mainpage;
