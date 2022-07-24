import { useRecoilState } from "recoil";
import styled from "styled-components";
import search from "../../lib/search";
import { searchMainClass, toggleAside } from "../../store";
import {
	color,
	description,
	fadeIn,
	flexCenter,
	pageSetting,
	titles,
} from "../../styles/theme";
import Aside from "../Aside";

interface IMain {
	title: string;
}

const Main: React.FC<IMain> = ({ title }) => {
	const [toggle, setToggle] = useRecoilState(toggleAside);
	const [text, setText] = useRecoilState(searchMainClass);

	return (
		<MainSection>
			<MainBox toggle={toggle}>
				<MainHeader>
					<span>{title}</span>
					{!toggle && <button onClick={() => setToggle(true)}></button>}
				</MainHeader>

				<MainRow>
					<Box flex={6} height={19.3125}></Box>
					<Box flex={4} height={17.3125}></Box>
				</MainRow>
				<MainRow>
					<Box
						flex={3.5}
						height={16}
						point={true}
						onSubmit={async (e) => await search(e, text)}
					>
						<img className="search" src="/image/search.svg" />
						<input
							className="searchBar"
							placeholder="캐릭터 검색..."
							type="form"
							autoFocus
							onChange={(e) => setText(e.target.value)}
						/>
					</Box>
					<Box flex={4} height={17.5625}></Box>
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

const Box = styled.form<IBoxSection>`
	display: flex;
	flex-direction: ${(props) => (props.point ? "row" : "column")};
	justify-content: ${(props) => props.point && "center"};
	align-items: ${(props) => props.point && "center"};
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
	${fadeIn}

	&:first-child {
		left: -2.75rem;
	}

	.search {
		width: 55.14px;
		height: 55.14px;
	}

	.searchBar {
		${description}

		font-weight: 600;
		font-size: 38px;
		line-height: 46px;
		color: ${color.font};
		outline: none;
		border: none;
		background: none;
		width: 70%;
	}
`;

export default Main;
