import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toggleAside } from "../store";
import { pageSetting, titles, color } from "../styles/theme";

const Index: NextPage = () => {
	const [toggle, setToggle] = useRecoilState(toggleAside);

	return (
		<HomeSection toggle={toggle}>
			<span>Dashboard</span>
		</HomeSection>
	);
};

interface IHomeSection {
	toggle: boolean;
}

const HomeSection = styled.section<IHomeSection>`
	${pageSetting}

	margin-right: ${(props) => props.toggle && "523px"};

	span {
		${titles}

		color: ${color.font};
		margin-top: 85px;
		margin-left: 81px;
	}
`;

export default Index;
