import React from "react";
import styled from "styled-components";

const GoldSectionBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 110px;
	height: 67vh;
	border: 3px solid white;
	border-radius: 6px;
	padding: 13px;
	box-sizing: border-box;
	margin-right: 2rem;
`;

function GoldSection() {
	return (
		<GoldSectionBox>
			<div>창술사</div>
			<div>아르고스</div>
			<div>3300</div>
		</GoldSectionBox>
	);
}

export default GoldSection;
