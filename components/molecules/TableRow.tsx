// 테이블 행

import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { flexCenter, color } from "../../styles/theme";
import { user } from "../../redux/modules/user";
import CheckBox from "../atoms/CheckBox";
import HoverBox from "../atoms/HoverBox";

const ItemRow = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	height: 5rem;
	background: ${color.white};
	border-radius: 0.84vh;
	color: ${color.black};
	margin-bottom: 1.5rem;

	.plus {
		font-size: 2rem;
		padding: 1rem;
		font-weight: bold;
		cursor: pointer;
	}
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
	list?: Array<any>;
}

const TableRow: React.FC<ICheckBox> = ({ name, job, list }) => {
	const [hover, setHover] = useState(false);
	const dispatch = useDispatch();

	let data = 12;
	// dispatch(user(data));

	// 새로 생성시 user list에 추가
	console.log(list);

	const addHandler = () => {
		console.log("plus");
	};

	return (
		<ItemRow>
			<ItemHeader
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<Image src="/" width="4" height="4" />

				<span style={{ marginLeft: "3px" }}>
					{hover && <HoverBox job={job} direction={false} />}
					{name}
				</span>
			</ItemHeader>

			{list?.map((el) => (
				<CheckBox data={el} />
			))}

			<span className="plus" onClick={() => addHandler()}>
				+
			</span>
		</ItemRow>
	);
};

export default TableRow;
