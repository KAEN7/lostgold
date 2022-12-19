import styled from "styled-components";
import { color } from "../styles/theme";

const Footer = () => {
	return (
		<FooterSection>
			<span>Copyright 2022. KAEN All rights reserved.</span>
		</FooterSection>
	);
};

const FooterSection = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-bottom: 0.5rem;
	box-sizing: border-box;
`;

export default Footer;
