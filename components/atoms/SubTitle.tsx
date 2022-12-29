import styled from "styled-components";
import { color } from "../../styles/theme";

export const SubTitle = ({ children }: any) => {
	return <SubTitleSection>{children}</SubTitleSection>;
};

const SubTitleSection = styled.h4`
	display: flex;
	padding: 0;
	margin: 0;
	margin-right: 1rem;
	font-weight: bold;
	font-size: 1rem;
	border-right: 1px solid ${color.subPoint};
	width: 6rem;
	text-align: justify;
`;
