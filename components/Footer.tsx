import Image from "next/image";
import styled from "styled-components";
import { flexCenter } from "../styles/theme";

const FooterSection = styled.footer`
	${flexCenter}

	height: 3vh;
	bottom: 0;
	position: absolute;
	margin-bottom: 0.5rem;

	span {
		margin-left: 0.5rem;
	}
`;

const Footer = () => {
	return (
		<FooterSection>
			<a href="https://github.com/KAEN7/lostgold" target="_blank">
				<Image src="/image/github.png" width={25} height={25} />
			</a>
			<span>ⓒ Kaen</span>
		</FooterSection>
	);
};

export default Footer;
