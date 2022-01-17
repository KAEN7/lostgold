// Gold 메인 화면

import styled from "styled-components";
import CheckBox from "../../components/atoms/CheckBox";
import TableRow from "../../components/molecules/TableRow";
import { flexCenterDir, color } from "../../styles/theme";

const GoldSection = styled.header`
	${flexCenterDir}

	width: 100%;
	height: 100%;
`;

function index() {
	return (
		<GoldSection>
			<TableRow name="카엔이었소" job="창술사"></TableRow>
		</GoldSection>
	);
}

export default index;
