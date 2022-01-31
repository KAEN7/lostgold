// 호버시 나타날 리스트

import styled from "styled-components";
import { color } from "../../styles/theme";

const ResultSection = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: center;
	width: 30rem;
	height: fit-content;
	padding: 8px;
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	border-radius: 8px;
	background: ${color.white};
	background: ${color.gray};
	color: ${color.black};
	font-size: 14px;
`;

export interface IResultBox {
	children?: Object[];
}

const ResultBox: React.FC<IResultBox> = ({ children }) => {
	return <ResultSection>{children}</ResultSection>;
};

export default ResultBox;
