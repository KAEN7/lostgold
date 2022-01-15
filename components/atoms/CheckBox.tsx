// 체크박스

import { FormEvent, useState } from "react";
import styled from "styled-components";
import { flexCenterDir, color } from "../../styles/theme";

const CheckSection = styled.div`
	${flexCenterDir}

	width: 6rem;
	height: 6rem;
	cursor: pointer;
	margin: 0.4rem;
	box-sizing: border-box;
`;

const CheckTitle = styled.form`
	width: fit-content;
	margin-bottom: 0.4rem;
`;

interface ICheckItem {
	color?: boolean | undefined;
}

const CheckItem = styled.div<ICheckItem>`
	width: 2rem;
	height: 2rem;
	border: 2px solid ${(props) => (props.color ? color.point : color.gray)};
	border-radius: 0.5rem;
	background: ${(props) => (props.color ? color.point : "none")};
`;

const CheckBox: React.FC = () => {
	const [checked, setChecked] = useState(false); // 체크박스 유무
	const [title, setTitle] = useState(false); // title 상태값
	const [titleValue, setTitleValue] = useState("입력"); // title value 상태값

	// todo 추후에 리덕스로 관리
	const titleList = [
		{ name: "오레하 노말", gold: 1100 },
		{ name: "오레하 하드", gold: 1300 },
		{ name: "아르고스", gold: 1600 },
		{ name: "발탄 노말", gold: 1300 },
		{ name: "발탄 하드", gold: 2100 },
		{ name: "비아 노말", gold: 1800 },
		{ name: "비아 하드", gold: 2800 },
		{ name: "쿠크세이튼", gold: 3100 },
		{ name: "아브 노말", gold: 4500 },
		{ name: "아브 하드", gold: 6000 },
	];

	// title value 변경 핸들러
	const onSubmitHandler = (e: any) => {
		setTitle(!title);
		e.preventDefault();
	};

	// todo Title을 누르면 보기 리스트가 나와야됨
	return (
		<CheckSection>
			<CheckTitle onSubmit={(e) => onSubmitHandler(e)}>
				{!title ? (
					<span onClick={() => setTitle(!title)}>{titleValue}</span>
				) : (
					// todo 모달 처리
					titleList.map((data, idx) => <span key={idx}>{data.name}</span>)
				)}
			</CheckTitle>
			<CheckItem
				color={checked}
				onClick={() => setChecked(!checked)}
			></CheckItem>
		</CheckSection>
	);
};

export default CheckBox;
