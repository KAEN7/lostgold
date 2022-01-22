// 테이블 행

import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { flexCenter, color } from "../../styles/theme";
import CheckBox from "../atoms/CheckBox";
import HoverBox from "../atoms/HoverBox";

const ItemRow = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
	height: 5rem;
	background: ${color.white};
	border-radius: 1.1rem;
	box-shadow: inset -1rem -1rem 1.3rem rgba(0, 0, 0, 0.11);
	color: ${color.black};
`;

const ItemHeader = styled.div`
	${flexCenter}

	height: 90%;
	min-width: 6rem;
	border-right: 0.14rem solid ${color.gray};
	cursor: pointer;

	span {
		${flexCenter}

		font-weight: bold;
		text-align: center;
		position: relative;
	}
`;

export interface ICheckBox {
	children?: string;
	name?: string;
	job?: string;
}

const TableRow: React.FC<ICheckBox> = ({ name, job }) => {
	const [hover, setHover] = useState(true);

	return (
		<ItemRow>
			<ItemHeader
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<Image src="/" width="4" height="4" />
				{/* todo hover시 보이게 적용 */}

				<span>
					{hover && <HoverBox job={job} direction={false} />}
					{name}
				</span>
			</ItemHeader>

			<CheckBox />
			<CheckBox />
			<CheckBox />
		</ItemRow>
	);
};

export default TableRow;
