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
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-bottom: 0.5rem;

	&:first-child {
		margin-bottom: 1rem;
		font-weight: bold;
		font-size: 105%;
	}

	&:last-child {
		margin-top: 2rem;
		font-size: 1.2rem;
		font-weight: bold;

		.result {
			margin-left: 0.5rem;
			font-size: 2rem;
			color: ${color.point};
			text-shadow: 1px 1px 2px black;
		}
	}
`;

const HeadItem = styled.span`
	width: 40%;
	text-align: center;
`;

const BodyItem = styled.span`
	width: 60%;
	text-align: center;
`;

export interface IResultBox {
	// user?: Array<object>;
	user?: any;
}

const ResultBox: React.FC<IResultBox> = ({ user }) => {
	// 주간 골드 배열
	const week = user.map((el: any) => {
		let sum = 0;
		const listArr = el.list;
		listArr.forEach((data: any) => data.boolean && (sum += data.gold));

		return sum;
	});

	// 주간 골드 배열 총합
	const month = week.reduce((a: number, c: number) => a + c);

	return (
		<ResultSection>
			<ResultList>
				<HeadItem>닉네임</HeadItem>
				<BodyItem>주간 골드</BodyItem>
			</ResultList>

			{user.map((el: any, idx: number) => (
				<ResultList key={`result${idx}`}>
					<HeadItem>{el.name}</HeadItem>
					<BodyItem>{week[idx]}G</BodyItem>
				</ResultList>
			))}

			<ResultList>
				총 주간골드 <span className="result">{month}G</span>
			</ResultList>
		</ResultSection>
	);
};

export default ResultBox;
