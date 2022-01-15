// Gold 메인 화면

import styled from "styled-components";
import CheckBox from "../../components/atoms/CheckBox";
import { flexCenter, color } from "../../styles/theme";

const GoldSection = styled.header`
	${flexCenter}

	width: 100%;
	height: 100%;
`;

const GoldRow = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	height: 5rem;
	background: ${color.white};
	border-radius: 1.1rem;
	box-shadow: inset -1rem -1rem 1.3rem rgba(0, 0, 0, 0.11);
	color: ${color.black};
`;

function index() {
	return (
		<GoldSection>
			<GoldRow>
				<>
					<>IMG</>
					{/* todo hover시 보이게 적용 */}
					<>창술사</>
					<>카엔이었소</>
				</>
				<CheckBox />
			</GoldRow>
		</GoldSection>
	);
}

export default index;
