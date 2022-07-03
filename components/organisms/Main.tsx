import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toggleAside } from "../../store";
import { color, pageSetting, titles } from "../../styles/theme";
import Box from "../atoms/Box";

interface IMain {
	title: string;
}

const Main: React.FC<IMain> = ({ title }) => {
	const [toggle, setToggle] = useRecoilState(toggleAside);

	return (
		<MainSection toggle={toggle}>
			<MainHeader>
				<span>{title}</span>
				{!toggle && <button onClick={() => setToggle(true)}></button>}
			</MainHeader>

			<MainBody>
				<Box
					width={toggle ? 31.3125 : 31.3125 * 1.5}
					height={14}
					point={true}
				></Box>
				<Box width={toggle ? 27 : 27 * 1.5} height={17.5625}></Box>
			</MainBody>
			<MainBody>
				<Box width={toggle ? 34.4375 : 34.4375 * 1.5} height={19.3125}></Box>
				<Box width={toggle ? 17.1875 : 17.1875 * 1.5} height={19.3125}></Box>
			</MainBody>
		</MainSection>
	);
};

interface IMainSection {
	toggle: boolean;
}

const MainSection = styled.aside<IMainSection>`
	${pageSetting}

	margin-right: ${(props) => props.toggle && "32.6875rem"};
	box-sizing: border-box;
`;

const MainHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 20px;

	span {
		${titles}

		color: ${color.font};
		margin-top: 5.3125rem;
		margin-left: 5.0625rem;
	}

	button {
		background-image: url("/image/arrow-right.svg");
		width: 2.375rem;
		height: 2.375rem;
		margin-right: 3rem;
		cursor: pointer;
	}
`;

const MainBody = styled.div`
	display: flex;
	justify-content: flex-end;
	position: relative;
	width: 100%;
	left: -30px;
	margin-bottom: 44px;
	padding-right: 72px;
	box-sizing: border-box;
`;

export default Main;
