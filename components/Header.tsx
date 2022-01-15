import Link from "next/link";
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

<<<<<<< HEAD
interface IHeaderBtnType {
	color?: (string & boolean[]) | undefined;
}

const HeaderBtn = styled.button<IHeaderBtnType>`
=======
const HeaderBtn = styled.a`
>>>>>>> 48cb0bf7b5fe112140302dff1c8f7e0c78abc823
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

	const focusHandler = (index: number) => {
		const newArr = Array(list.length).fill(false);
		newArr[index] = true;
		setBoxSelect(newArr);
	};

	return (
		<HeaderSection>
			{list.map((el, index) => (
<<<<<<< HEAD
				<HeaderBtn
					key={`header${index}`}
					color={isBoxSelect[index]}
					onClick={() => focusHandler(index)}
				>
					<Link href={el.toLowerCase()} passHref>
						<a>{el}</a>
					</Link>
				</HeaderBtn>
=======
				<Link href={`/${el.toLowerCase()}`}>
					<HeaderBtn
						color={isBoxSelect[index]}
						onClick={() => focusHandler(index)}
					>
						{el}
					</HeaderBtn>
				</Link>
>>>>>>> 48cb0bf7b5fe112140302dff1c8f7e0c78abc823
			))}
		</HeaderSection>
	);
}

export default Header;
