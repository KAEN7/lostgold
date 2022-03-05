/* Setting 페이지
 * 현재 명파 가격 캐릭터당 어떤 레이드인지 지정
 */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";
import { flexCenter, flexCenterDir, pageDefault, color } from "../styles/theme";
import { getUsers } from "../redux/modules/user";
import MatarialInfo from "../components/MatarialInfo";
import RaidInfo from "../components/RaidInfo";

const SettingSection = styled.header`
	${pageDefault}
`;

interface ISettingBox {
	defaultStyle?: Boolean;
}

const SettingBox = styled.div<ISettingBox>`
	/* 재료 가격 관련 함수 */
	${(props) => !props.defaultStyle && flexCenterDir}
	display: ${(props) => props.defaultStyle && "flex"};
	justify-content: ${(props) => props.defaultStyle && "space-around"};
	flex-wrap: ${(props) => props.defaultStyle && "wrap"};

	width: 30rem;
	padding: 1rem;
	box-sizing: border-box;
	border-radius: 0.84vh;
	background: ${color.white};
	color: black;
`;

// 아이템 박스
const ItemBox = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 9rem;
	color: black;
	margin: 0.5rem;

	.subTitle {
		width: 6rem;
		margin-right: 0.3rem;
	}

	.goldInput {
		width: 3rem;
		border: none;
		border-bottom: 0.1rem solid ${color.darkPoint};
		outline: none;
		text-align: center;

		&::placeholder {
			text-align: center;
		}
	}

	.gold {
		border-left: 0.2rem solid ${color.darkPoint};
		padding-left: 0.3rem;
		color: ${color.point};
		font-weight: bold;
	}
`;

// input 들어가는 form 박스
const FormBox = styled.form`
	${flexCenter}

	margin: 0 0.5rem;
	cursor: pointer;

	input {
		width: 3rem;
		margin-left: 0.3rem;
		outline: none;
		border: none;
		border-bottom: 0.1rem solid ${color.darkPoint};

		&::placeholder {
			text-align: center;
		}
	}
`;

// todo 버튼 스타일 추후에 Storybook으로 전환
const SaveBtn = styled.button`
	${flexCenterDir}

	background: ${color.darkPoint};
	color: ${color.black};
	width: 5rem;
	min-height: 2rem;
	height: 2rem;
	border-radius: 0.44vh;
	font-weight: bold;
	letter-spacing: 0.2rem;
	margin: 3rem auto;
	cursor: pointer;

	&:hover {
		background: ${color.point};
	}
`;

function Setting() {
	const dispatch = useDispatch();
	const userData = useSelector((state: any) => state.user.userData);

	// 재료 리스트
	// todo 로컬 스토리지로 추후에 관리 전환
	const [matarialList, setMatarialList] = useState([
		{ name: "파괴석 조각", src: "", value: 0, toggle: true },
		{ name: "파괴석", src: "", value: 0, toggle: true },
		{ name: "파괴석 결정", src: "", value: 0, toggle: true },
		{ name: "명예의 돌파석", src: "", value: 0, toggle: true },
		{ name: "위대한 명예의 돌파석", src: "", value: 0, toggle: true },
		{ name: "경이로운 명예의 돌파석", src: "", value: 0, toggle: true },
	]);

	// 재료 리스트 핸들러
	const onMatarialHandler = (data: Array<any>) => {
		setMatarialList(data);
	};

	// 캐릭터 생성 상태값
	const [char, setChar] = useState({ name: "", job: "", level: 0 });

	// 캐릭터 생성 핸들러
	const onCharHandler = (flag: string, data: any) => {
		switch (flag) {
			case "name":
				setChar({ ...char, name: data });
				break;
			case "job":
				setChar({ ...char, job: data });
				break;
			case "level":
				setChar({ ...char, level: data });
				break;
			default:
				break;
		}
	};

	// 저장 핸들러
	const onSaveHandler = (e: any) => {
		e.preventDefault();
		const sameName = userData.find((el: any) => el.name === char.name);

		// dispatch로 바뀐값 저장
		!sameName && char.name !== ""
			? (dispatch(
					getUsers({
						name: char.name,
						job: char.job,
						level: char.level,
						list: [],
						raid: { name: "레이드", toggle: true, boolean: true },
						honorStone: { name: "돌파석", count: 0, boolean: true, gold: 0 },
						stone: { name: "파괴석", count: 0, boolean: true, gold: 0 },
					})
			  ),
			  alert("저장되었습니다"))
			: sameName
			? alert(
					"동일한 캐릭터 이름이 이미 존재하거나\n캐릭터명이 입력되지 않았습니다"
			  )
			: alert("저장되었습니다");

		// 기본값 초기화
		setChar({ name: "", job: "", level: 0 });
	};

	return (
		<>
			<Header title="setting" />
			<SettingSection>
				<br />

				{/* 재료 정보 */}
				<MatarialInfo
					SettingBox={SettingBox}
					ItemBox={ItemBox}
					matarialList={matarialList}
					onMatarialHandler={onMatarialHandler}
				/>
				<br />

				{/* 레이드 정보 */}
				<RaidInfo
					SettingBox={SettingBox}
					FormBox={FormBox}
					matarialList={matarialList}
				/>
				<br />

				{/* 캐릭터 추가 */}
				<h3>새로운 캐릭터를 추가해보세요</h3>
				<SettingBox defaultStyle={true}>
					<FormBox onSubmit={(e) => e.preventDefault()}>
						<span>캐릭터명</span>
						<input
							value={char.name}
							onChange={(e) => onCharHandler("name", e.target.value)}
						/>
					</FormBox>
					<FormBox onSubmit={(e) => e.preventDefault()}>
						<span>직업</span>
						<input
							value={char.job}
							onChange={(e) => onCharHandler("job", e.target.value)}
						/>
					</FormBox>
					<FormBox onSubmit={(e) => e.preventDefault()}>
						<span>레벨</span>
						<input
							type="number"
							value={char.level}
							onChange={(e) => onCharHandler("level", e.target.value)}
						/>
					</FormBox>
				</SettingBox>

				<SaveBtn onClick={(e) => onSaveHandler(e)}>저장</SaveBtn>
			</SettingSection>
		</>
	);
}

export default Setting;
