import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { flexCenter, color } from "../styles/theme";

const HeaderSection = styled.header`
	${flexCenter}

	width: 100%;
	height: 6vh;
	top: 0;
	position: fixed;
	box-sizing: border-box;
	z-index: 2;
	background: ${color.black};
`;

interface IHeaderBtnType {
	color: any;
}

const HeaderBtn = styled.button<IHeaderBtnType>`
	${flexCenter}

	width: 5rem;
	height: 2rem;
	margin: 0.7rem;
	border-right: 0.1rem solid ${color.point};
	cursor: pointer;
	font-size: ${(props) => Boolean(props.color) && "0.9rem"};
	font-weight: ${(props) => (Boolean(props.color) ? "bold" : "normal")};
	color: ${(props) => (Boolean(props.color) ? color.white : color.gray)};
`;

interface IHeader {
	title?: string;
}

function Header({ title }: IHeader) {
	const list = ["Home", "Gold", "Setting"];

	return (
		<HeaderSection>
			{list.map((el, index) => (
				<Link
					key={`header${index}`}
					href={el === "Home" ? "/" : el.toLowerCase()}
					passHref
				>
					<HeaderBtn color={String(title === el.toLowerCase())}>{el}</HeaderBtn>
				</Link>
			))}
		</HeaderSection>
	);
}

export default Header;
