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

const ResultList = styled.tr`
	display: flex;
`;

export interface IResultBox {
	// user?: Array<object>;
	user?: any;
}

const ResultBox: React.FC<IResultBox> = ({ user }) => {
	const sum = user.reduce((a: any, c: any) => c.list.gold + a);
	return (
		<ResultSection>
			<table>
				<thead>
					<tr>
						<th>닉네임</th>
						<th>주간 골드</th>
					</tr>
				</thead>
				<tbody>
					{user.map((el: any, idx: any) => (
						<ResultList key={`result${idx}`}>
							<td>{el.name}</td>
							<td>주간 골드:{}</td>
						</ResultList>
					))}
					<tr>
						총 주간 골드<span>{}</span>
					</tr>
				</tbody>
			</table>
		</ResultSection>
	);
};

export default ResultBox;
