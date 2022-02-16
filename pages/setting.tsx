/* Setting 페이지
 * 현재 명파 가격 캐릭터당 어떤 레이드 인지 지정
 */

import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { flexCenterDir, pageDefault, color } from "../styles/theme";

const SettingSection = styled.header`
	${pageDefault}
`;

const SettingBox = styled.div`
	${flexCenterDir}

	width: 30rem;
	padding: 1rem;
	margin: 2rem 0;
	box-sizing: border-box;
	border-radius: 1.4vh;
	background: ${color.white};
`;

const SettingRow = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: ${color.black};
	margin: 0.5rem;
`;

function Setting() {
	return (
		<>
			<Header title="setting" />
			<SettingSection>
				<SettingBox>
					<SettingRow>
						<>명파</>
						<>20</>
					</SettingRow>
				</SettingBox>

				<SettingBox>
					<SettingRow>
						<>캐릭명</>
						<>레이드</>
						<>명파</>
						<>개수</>
						<>파괴석</>
						<>개수</>
					</SettingRow>
				</SettingBox>

				<button>저장</button>
			</SettingSection>
		</>
	);
}

export default Setting;
