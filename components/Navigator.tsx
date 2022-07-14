import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { description, color } from "../styles/theme";
import Logo from "./Logo";

const Navigator = () => {
	const navList = ["Dashboard", "Gold"];

	const router = useRouter();
	console.log("router", router.asPath);

	return (
		<NavigatorSection>
			<LogoBox>{/* <Logo></Logo> */}</LogoBox>
			<h1>Lost Gold</h1>

			<NavList>
				{navList.map((item) => (
					<Link
						href={`/${item === "Dashboard" ? "" : item}`}
						passHref
						key={item}
					>
						<NavItem
							router={router.asPath === `/${item === "Dashboard" ? "" : item}`}
						>
							{router.asPath === `/${item === "Dashboard" ? "" : item}` ? (
								<img
									src={`/image/${item}Icon.svg`}
									style={{ marginRight: "1.125rem" }}
								/>
							) : (
								<img
									src={`/image/${item}OffIcon.svg`}
									style={{ marginRight: "1.125rem" }}
								/>
							)}

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
	padding: 2.25rem;
	box-sizing: border-box;
	width: 20rem;

	h1 {
		${description}

		font-size: 1.6881rem;
		color: ${color.default};
		margin-top: 2.6875rem;
		margin-bottom: 7.3125rem;
	}
`;

const LogoBox = styled.button`
	width: 4.875rem;
	height: 4.875rem;
	background: ${color.point};
	border-radius: 0.9375rem;
`;

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
`;

interface INavItem {
	router: boolean;
}

const NavItem = styled.a<INavItem>`
	display: flex;
	align-items: flex-end;
	margin-bottom: 1.8125rem;

	img {
	}

	span {
		${description}

		font-size: 1.5602rem;
		color: ${(props) => (props.router ? color.darkPoint : color.lightFont)};
	}
`;

export default Navigator;
