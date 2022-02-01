/* Setting 페이지
 * 현재 명파 가격 캐릭터당 어떤 레이드 인지 지정
 */

import { useState } from "react";
import styled from "styled-components";
import { flexCenter, color } from "../styles/theme";

const SettingSection = styled.header`
	${flexCenter}

	margin-top: 6vh;
	height: 94vh;
`;

function Setting() {
	return <SettingSection>test Setting page</SettingSection>;
}

export default Setting;
