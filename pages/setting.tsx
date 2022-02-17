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
	border-radius: 0.84vh;
	background: ${color.white};
`;

const SettingRow = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: ${color.black};
	margin: 0.5rem;
`;

const SaveBtn = styled.button`
	${flexCenterDir}

	background: ${color.point};
	color: ${color.black};
	width: 5rem;
	height: 2rem;
	border-radius: 0.44vh;
	font-weight: bold;
	letter-spacing: 0.2rem;
	margin-top: 3rem;
	cursor: pointer;
`;

function Setting() {
	return (
		<>
			<Header title="setting" />
			<SettingSection>
				<br />
				<span>각 재료들의 판매 가격을 적어주세요</span>
				<SettingBox>
					<SettingRow>
						<>명파</>
						<>20</>
					</SettingRow>
				</SettingBox>
				<br />
				<span>해당 캐릭터의 휴게 기준 2수 재료 수급개수를 적어주세요</span>
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
				<br />
				<span>새로운 캐릭터를 추가해보세요</span>
				<SettingBox></SettingBox>
				<SaveBtn>저장</SaveBtn>
			</SettingSection>
		</>
	);
}

export default Setting;
