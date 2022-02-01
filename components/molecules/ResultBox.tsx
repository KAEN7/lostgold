// 호버시 나타날 리스트

import styled from "styled-components";
import { flexCenterDir, color } from "../../styles/theme";

const ResultSection = styled.ul`
	${flexCenterDir}

	width: 50%;
	height: fit-content;
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	border-radius: 8px;
	background: ${color.white};
	color: ${color.black};
	font-size: 14px;
	margin-left: 1rem;
	box-sizing: border-box;
	padding: 1rem;
`;

const ResultList = styled.div`
	display: flex;
`;

export interface IResultBox {
	children?: Object[];
}

const ResultBox: React.FC<IResultBox> = ({ children }) => {
	const tempAPIArr = [{ name: "닉네임", result: 14000 }];

	return (
		<ResultSection>
			{tempAPIArr.map((el, idx) => (
				<ResultList key={idx}>
					{el.name}
					<span>주간 골드:{el.result}</span>
				</ResultList>
			))}
			<>
				총 주간 골드<span>{}</span>
			</>
		</ResultSection>
	);
};

export default ResultBox;
