import Link from "next/link";
import styled from "styled-components";
import { color } from "../styles/theme";

const Header = () => {
	return (
		<HeaderSection>
			<Link href="/">LostGold</Link>
			<nav>
				<Link href="gold">골드</Link>
				<Link href="guild">길드</Link>
				<Link href="rank">순위</Link>
			</nav>
		</HeaderSection>
	);
};

const HeaderSection = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 3rem;
	padding: 0 3rem;
	box-sizing: border-box;
	background: ${color.black};
	color: ${color.white};

	nav {
		a {
			margin-left: 1rem;
			letter-spacing: 0.1rem;
		}
	}
`;

export default Header;
