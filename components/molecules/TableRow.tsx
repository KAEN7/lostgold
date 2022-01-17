// 테이블 행

import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { flexCenter, color } from "../../styles/theme";
import CheckBox from "../atoms/CheckBox";

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
	border-right: 0.14rem solid ${color.gray};

	span {
		font-weight: bold;
	}

	.hoverSpan {
		display: none;
	}
`;

export interface ICheckBox {
	children?: string;
	name?: string;
	job?: string;
}

const TableRow: React.FC<ICheckBox> = ({ name, job }) => {
	return (
		<ItemRow>
			<ItemHeader>
				<Image src="/" width="4" height="4" />
				{/* todo hover시 보이게 적용 */}

				<span>
					{name}
					<span className="hoverSpan">{job}</span>
				</span>
			</ItemHeader>

			<CheckBox />
			<CheckBox />
			<CheckBox />
		</ItemRow>
	);
};

export default TableRow;
