// 호버시 나타날 리스트

import { useSelector } from "react-redux";
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

const ResultBox: React.FC<IResultBox> = () => {
	const user = useSelector((state: any) => state.user.userData);

	// 주간 골드 배열
	const week = user.map((el: any) => {
		let sum: number = 0;
		const honorStone =
			el.raid.boolean && el.honorStone.count && el.honorStone.gold
				? Number(el.honorStone.count) * Number(el.honorStone.gold)
				: 0;
		const stone =
			el.raid.boolean && el.stone.count && el.stone.gold
				? Number(el.stone.count) * Number(el.stone.gold)
				: 0;
		const raid = (honorStone + stone) * 2;
		const listArr = el.list;
		listArr.forEach((data: any) => data.boolean && (sum += data.gold));

		return sum + raid;
	});

	// 주간 골드 배열 총합
	const month =
		week.length !== 0 ? week.reduce((a: number, c: number) => a + c) : 0;

	console.log(user);

	return (
		<ResultSection>
			<ResultList>
				<HeadItem>닉네임</HeadItem>
				<BodyItem>주간 골드</BodyItem>
			</ResultList>

			{user.length === 0 ? (
				<h3>캐릭터가 없습니다</h3>
			) : (
				user.map((el: any, idx: number) => (
					<ResultList key={`result${idx}`}>
						<HeadItem>{el.name}</HeadItem>
						<BodyItem>{week[idx] === NaN ? 0 : week[idx]}G</BodyItem>
					</ResultList>
				))
			)}

			<ResultList>
				총 주간골드 <span className="result">{month}G</span>
			</ResultList>
		</ResultSection>
	);
};

export default ResultBox;
