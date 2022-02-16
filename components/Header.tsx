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
`;

interface IHeaderBtnType {
	color?: any;
}

const HeaderBtn = styled.button<IHeaderBtnType>`
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

interface IHeader {
	title: string;
}

function Header({ title }: IHeader) {
	const list = ["Home", "Gold", "Setting"];
	const [isBoxSelect, setBoxSelect] = useState([true, false, false]);

	// 포커스 된 문구 true로 변경
	const focusHandler = useCallback((index: number) => {
		const newArr = Array(list.length).fill(false);
		newArr[index] = true;
		setBoxSelect(newArr);
	}, []);

	return (
		<HeaderSection>
			{list.map((el, index) => (
				<Link href={el === "Home" ? "/" : el.toLowerCase()} passHref>
					<HeaderBtn
						key={`header${index}`}
						// color={isBoxSelect[index]}
						color={title === el.toLowerCase()}
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
