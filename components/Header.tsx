import { useState } from "react";
import styled from "styled-components";
import Link from "next/Link";
import { flexCenter, color } from "../styles/theme";

const HeaderSection = styled.header`
	${flexCenter}

	width: 100%;
	height: 6vh;
	top: 0;
	position: fixed;
	box-sizing: border-box;
`;

const HeaderBtn = styled.a`
	${flexCenter}

	width: 5rem;
	height: 2rem;
	margin: 0.7rem;
	border-right: 0.1rem solid ${color.point};
	cursor: pointer;
	font-size: ${(props) => props.color && "0.9rem"};
	font-weight: ${(props) => (props.color ? "bold" : "normal")};
	color: ${(props) => (props.color ? color.white : color.gray)};
`;

function Header() {
	const list = ["Home", "Gold", "Setting"];
	const [isBoxSelect, setBoxSelect] = useState([true, false, false]);

	const focusHandler = (index: any) => {
		const newArr = Array(list.length).fill(false);
		newArr[index] = true;
		setBoxSelect(newArr);
	};

	return (
		<HeaderSection>
			{list.map((el, index) => (
				<Link href={`/${el.toLowerCase()}`}>
					<HeaderBtn
						color={isBoxSelect[index]}
						onClick={() => focusHandler(index)}
					>
						{el}
					</HeaderBtn>
				</Link>
			))}
		</HeaderSection>
	);
}

export default Header;
