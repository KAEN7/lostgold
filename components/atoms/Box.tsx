import styled from "styled-components";
import { color } from "../../styles/theme";

interface IBox {
	width: number;
	height: number;
	point?: boolean;
}

const Box: React.FC<IBox> = ({ width, height, point = false }) => {
	return <BoxSection width={width} height={height} point={point}></BoxSection>;
};

interface IBoxSection {
	width: number;
	height: number;
	point?: boolean;
}

const BoxSection = styled.div<IBoxSection>`
	display: flex;
	flex-direction: column;
	background: ${(props) => (props.point ? color.lightPoint : color.default)};
	border-radius: 42px;
	width: ${(props) => `${props.width}rem`};
	height: ${(props) => `${props.height}rem`};
	box-shadow: ${(props) => props.point && "0px 12px 31px rgba(0, 0, 0, 0.25)"};
	position: relative;
	top: ${(props) => props.point && "20px"};
	left: ${(props) => props.point && "-20px"};
	box-sizing: border-box;

	&:first-child {
		left: -44px;
	}
`;

export default Box;
