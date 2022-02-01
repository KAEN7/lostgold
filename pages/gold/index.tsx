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
		{ name: "닉네임", job: "창술사" },
		{ name: "닉네임", job: "창술사" },
		{ name: "닉네임", job: "배틀마스터" },
		{ name: "닉네임", job: "창술사" },
		{ name: "닉네임", job: "도화가" },
		{ name: "닉네임", job: "창술사" },
		{ name: "닉네임", job: "창술사" },
		{ name: "닉네임", job: "창술사" },
		{ name: "닉네임", job: "창술사" },
		{ name: "닉네임", job: "창술사" },
	];

	return (
		<GoldSection>
			<TableBox>
				{tempAPIArr.map((el: any, idx: number) => (
					<TableRow name={el.name} job={el.job} key={`el${idx}`}></TableRow>
				))}
			</TableBox>

			<ResultBox />
		</GoldSection>
	);
}

export default index;
