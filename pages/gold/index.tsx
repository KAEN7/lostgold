// Gold 메인 화면

import styled from "styled-components";
import ResultBox from "../../components/molecules/ResultBox";
import TableRow from "../../components/molecules/TableRow";
import { flexCenterDir, color, scrollBar } from "../../styles/theme";

const GoldSection = styled.header`
	${scrollBar}

	margin-top: 6vh;
	height: 94vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background: ${color.black};
`;

const TableBox = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	width: 100%;
	height: fit-content;
`;

function index() {
	const tempAPIArr = [
		{ name: "오레하 노말", gold: 1100 },
		{ name: "오레하 하드", gold: 1300 },
		{ name: "아르고스", gold: 1600 },
		{ name: "발탄 노말", gold: 1300 },
		{ name: "발탄 하드", gold: 2100 },
		{ name: "비아 노말", gold: 1800 },
		{ name: "비아 하드", gold: 2800 },
		{ name: "쿠크세이튼", gold: 3100 },
		{ name: "아브 노말", gold: 4500 },
		{ name: "아브 하드", gold: 6000 },
	];

	return (
		<GoldSection>
			<TableBox>
				{tempAPIArr.map((el: any, idx: number) => (
					<TableRow name={el.name} job="창술사" key={`el${idx}`}></TableRow>
				))}
			</TableBox>

			<ResultBox />
		</GoldSection>
	);
}

export default index;
