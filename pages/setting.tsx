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
