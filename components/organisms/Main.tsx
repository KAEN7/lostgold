import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toggleAside } from "../../store";
import { color, flexCenter, pageSetting, titles } from "../../styles/theme";
import Aside from "../Aside";

interface IMain {
	title: string;
}

const Main: React.FC<IMain> = ({ title }) => {
	const [toggle, setToggle] = useRecoilState(toggleAside);

	return (
		<MainSection>
			<MainBox toggle={toggle}>
				<MainHeader>
					<span>{title}</span>
					{!toggle && <button onClick={() => setToggle(true)}></button>}
				</MainHeader>

				<MainRow>
					<Box flex={4} height={19.3125}></Box>
					<Box flex={5} height={17.3125}></Box>
				</MainRow>
				<MainRow>
					<Box flex={3} height={16} point={true}></Box>
					<Box flex={2} height={17.5625}></Box>
				</MainRow>
			</MainBox>
			<Aside />
		</MainSection>
	);
};
interface IMainSection {
	toggle: boolean;
}

const MainSection = styled.main`
	${flexCenter}

	width: 100%;
	height: 100%;
`;

const MainBox = styled.div<IMainSection>`
	${pageSetting}

	flex: 3;
	box-sizing: border-box;
	margin-right: 2.6875rem;
`;

const MainHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.25rem;
	width: 100%;

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

const MainRow = styled.div`
	display: flex;
	width: 100%;
`;

interface IBoxSection {
	flex: number;
	height: number;
	point?: boolean;
}

const Box = styled.div<IBoxSection>`
	display: flex;
	flex-direction: column;
	background: ${(props) => (props.point ? color.lightPoint : color.default)};
	border-radius: 2.625rem;
	flex: ${(props) => props.flex};
	height: ${(props) => `${props.height}rem`};
	box-shadow: ${(props) =>
		props.point && "0rem .75rem 1.9375rem rgba(0, 0, 0, 0.25)"};
	position: ${(props) => props.point && "relative"};
	top: ${(props) => props.point && "1.25rem"};
	left: ${(props) => props.point && "-1.25rem"};
	box-sizing: border-box;
	margin: 10px 20px;

	&:first-child {
		left: -2.75rem;
	}
`;

export default Main;
