// Gold 메인 화면

import Link from "next/link";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";
import ResultBox from "../components/molecules/ResultBox";
import TableRow from "../components/molecules/TableRow";
import { pageDefault, color, scrollBar } from "../styles/theme";

const GoldSection = styled.section`
	${scrollBar}
	${pageDefault}
`;

const TableBox = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: fit-content;
`;

const PlusBtn = styled.a`
	padding: 0;
	margin: 0 auto;
	font-size: 2rem;
	cursor: pointer;
`;

function gold() {
	const user = useSelector((state: any) => state.user.userData); // state: RootState
	console.log(user, "user reducer");
	return (
		<>
			<Header title="gold" />
			<GoldSection>
				<TableBox>
					{user.map((el: any, idx: number) => (
						<TableRow
							name={el.name}
							job={el.job}
							key={`el${idx}`}
							list={el.list}
						></TableRow>
					))}
				</TableBox>

				<Link href="setting">
					<PlusBtn>+</PlusBtn>
				</Link>

				<ResultBox user={user} />
			</GoldSection>
		</>
	);
}

export default gold;
