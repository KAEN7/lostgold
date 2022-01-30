// 호버시 나타날 말풍선

import styled from "styled-components";

interface IArrowBox {
	direction?: boolean;
}

const ArrowBox = styled.div<IArrowBox>`
	text-align: center;
	position: absolute;
	width: fit-content;
	padding: 8px;
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	border-radius: 8px;
	background: #333;
	color: #fff;
	font-size: 14px;
	bottom: ${(props) => (props.direction ? "-49px" : "29px")};

	&:after {
		position: absolute;
		left: 50%;
		width: 0;
		height: 0;
		margin-left: -10px;
		border: solid transparent;
		border-color: rgba(51, 51, 51, 0);
		border-bottom-color: #333;
		border-width: 10px;
		pointer-events: none;
		content: " ";

		transform: ${(props) =>
			props.direction ? "rotate(0deg)" : "rotate(180deg)"};
		bottom: ${(props) => (props.direction ? "100%" : "-50%")};
	}
`;

export interface IHoverBox {
	job?: string;
	direction?: boolean; // true면 화살표가 아래
}

const HoverBox: React.FC<IHoverBox> = ({ job, direction }) => {
	return <ArrowBox direction={direction}>{job}</ArrowBox>;
};

export default HoverBox;
