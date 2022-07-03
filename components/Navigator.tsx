import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { description, color } from "../styles/theme";

const Navigator = () => {
	const navList = ["Dashboard", "Gold"];

	return (
		<NavigatorSection>
			<Logo></Logo>
			<h1>Lost Gold</h1>

			<NavList>
				{navList.map((item) => (
					<Link
						href={`${item === "Dashboard" ? "/" : `/${item}`}`}
						passHref
						key={item}
					>
						<NavItem>
							<img
								src={`/image/${item}Icon.svg`}
								style={{ marginRight: "18px" }}
							/>
							<span>{item}</span>
						</NavItem>
					</Link>
				))}
			</NavList>
		</NavigatorSection>
	);
};

const NavigatorSection = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 100%;
	padding: 36px;
	box-sizing: border-box;
	width: 20rem;

	h1 {
		${description}

		font-size: 27.01px;
		color: ${color.lightFont};
		margin-top: 43px;
		margin-bottom: 117px;
	}
`;

const Logo = styled.button`
	width: 78px;
	height: 78px;
	background: ${color.point};
	border-radius: 15px;
`;

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
`;

const NavItem = styled.a`
	display: flex;
	align-items: flex-end;
	margin-bottom: 29px;

	span {
		${description}

		font-size: 24.9638px;
		color: ${color.darkPoint};
	}
`;

export default Navigator;
