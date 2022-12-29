import styled from "styled-components";
import { color } from "../../styles/theme";

export const ListTitle = ({ children }: any) => {
	return <ListTitleSection>{children}</ListTitleSection>;
};

const ListTitleSection = styled.h4`
	display: flex;
	justify-content: center;

	padding: 0;
	margin: 0;
	margin-right: 1rem;

	width: 100%;
	background: ${color.subPoint};
	border-radius: 18px;

	font-weight: bold;
	font-size: 1rem;
	color: ${color.black};
	letter-spacing: 0.1rem;
`;
