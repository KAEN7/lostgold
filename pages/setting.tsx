/* Setting 페이지
 * 현재 명파 가격 캐릭터당 어떤 레이드 인지 지정
 */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ListBox from "../components/atoms/ListBox";
import Header from "../components/Header";
import { flexCenter, flexCenterDir, pageDefault, color } from "../styles/theme";
import {
	putRaidToggle,
	putRaidToggleOn,
	putHonerStoneToggle,
	putStoneToggle,
	putHonerStoneName,
	putStoneName,
} from "../redux/modules/user";

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
`;

const SettingRow = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: ${color.black};
	margin: 0.5rem;
	flex-wrap: wrap;
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

const RestHeader = styled.span`
	font-weight: bold;
	padding-right: 0.5rem;
	border-right: 0.2rem solid ${color.darkPoint};
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
	height: 2rem;
	border-radius: 0.44vh;
	font-weight: bold;
	letter-spacing: 0.2rem;
	margin-top: 3rem;
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

	// 재료 input toggle 변경
	const onSubmitMatarial = (e: any, idx: number, boo: boolean) => {
		const temp = matarialList.map((el, index) =>
			idx === index ? { ...el, toggle: boo } : el
		);
		setMatarialList(temp);
		e.preventDefault();

		alert("저장되었습니다!");
	};

	// 재료 input value 변경
	const onChangeMatarial = (e: any, idx: number) => {
		const temp = matarialList.map((el, index) =>
			idx === index ? { ...el, toggle: true, value: e.target.value } : el
		);
		setMatarialList(temp);
	};

	// 레이드 목록
	const raidList = [
		{ name: "우르닐" },
		{ name: "루메루스" },
		{ name: "빙결의 레기오로스" },
		{ name: "베루투스" },
		{ name: "크로마니움" },
		{ name: "나크라세나" },
		{ name: "홍염의 요호" },
		{ name: "타이탈로스" },
		{ name: "어둠의 레기오로스" },
		{ name: "헬가이아" },
		{ name: "칼벤투스" },
		{ name: "아카테스" },
		{ name: "혹한의 헬가이아" },
		{ name: "용암 크로마니움" },
		{ name: "레바노스" },
		{ name: "엘버하스틱" },
		{ name: "중갑 나크라세나" },
		{ name: "이그렉시온" },
		{ name: "흑야의 요호" },
		{ name: "벨가누스" },
		{ name: "데스칼루다" },
		{ name: "쿤겔라니움" },
		{ name: "칼엘리고스" },
		{ name: "하누마탄" },
	];

	// toggle true 변경 핸들러
	const onToggleHandler = (charName: string) => {
		dispatch(putRaidToggleOn({ charName: charName, toggle: false }));
	};

	// toggle false 변경 및 리스트 팝업 관련 핸들러
	const onTitlehandler = (name: string, charName: string) => {
		dispatch(putRaidToggle({ charName: charName, name: name, toggle: true }));
	};

	// 재료 개수 핸들러
	const onCountHandler = (
		e: any,
		name: string,
		title: string,
		check: boolean
	) => {
		e.preventDefault();
		if (title === "honorStone") {
			check
				? dispatch(
						putHonerStoneToggle({
							count: e.target.value,
							name: name,
							boolean: true,
						})
				  )
				: dispatch(
						putHonerStoneToggle({
							count: e.target.value,
							name: name,
							boolean: false,
						})
				  );
		} else if (title === "stone") {
			check
				? dispatch(
						putStoneToggle({
							count: e.target.value,
							name: name,
							boolean: true,
						})
				  )
				: dispatch(
						putStoneToggle({
							count: e.target.value,
							name: name,
							boolean: false,
						})
				  );
		}
	};

	// 재료명 변경 핸들러
	const onHonorStoneTitleHandler = (name: string, key: string) => {
		console.log(name, key);
		dispatch(putHonerStoneName({ name: key, stoneName: name, boolean: true }));
	};

	const onStoneTitleHandler = (name: string, key: string) => {
		console.log(name, key);
		dispatch(putStoneName({ name: key, stoneName: name, boolean: true }));
	};

	return (
		<>
			<Header title="setting" />
			<SettingSection>
				<br />

				{/* 재료 정보 */}
				<h3>각 재료들의 판매 가격을 적어주세요</h3>
				<SettingBox defaultStyle={true}>
					{matarialList.map((el, idx) => (
						<ItemBox
							key={`item${idx}`}
							onSubmit={(e) => onSubmitMatarial(e, idx, false)}
						>
							<></>
							<h4 className="subTitle">{el.name}</h4>
							{el.toggle ? (
								<input
									type="number"
									className="goldInput"
									value={el.value}
									onChange={(e) => onChangeMatarial(e, idx)}
								/>
							) : (
								<span
									className="gold"
									onClick={(e) => onSubmitMatarial(e, idx, true)}
								>
									{el.value}G
								</span>
							)}
						</ItemBox>
					))}
				</SettingBox>
				<br />

				{/* 레이드 정보 */}
				<h3>해당 캐릭터의 휴게 기준 재료 수급개수를 적어주세요</h3>
				<SettingBox>
					{userData.map((el: any, idx: number) => (
						<SettingRow key={`setup${idx}`}>
							<RestHeader>{el.name}</RestHeader>
							{el.raid.toggle ? (
								<FormBox onClick={() => onToggleHandler(el.name)}>
									{el.raid.name}
								</FormBox>
							) : (
								<ListBox name={el.name} onTitlehandler={onTitlehandler}>
									{raidList}
								</ListBox>
							)}
							{/* 돌파석 */}
							{el.honorStone.boolean ? (
								<FormBox onSubmit={(e) => e.preventDefault()}>
									<span
										onClick={(e) =>
											onCountHandler(e, el.name, "honorStone", false)
										}
									>
										{el.honorStone.name}:
									</span>
									{
										<input
											type="number"
											placeholder="개수"
											value={el.honorStone.count}
											onChange={(e) =>
												onCountHandler(e, el.name, "honorStone", true)
											}
										/>
									}
								</FormBox>
							) : (
								<ListBox
									name={el.name}
									onTitlehandler={onHonorStoneTitleHandler}
								>
									{matarialList.slice(3)}
								</ListBox>
							)}
							{/* 파괴석 */}
							{el.stone.boolean ? (
								<FormBox onSubmit={(e) => e.preventDefault()}>
									<span
										onClick={(e) => onCountHandler(e, el.name, "stone", false)}
									>
										{el.stone.name}:
									</span>
									<input
										type="number"
										placeholder="개수"
										onChange={(e) => onCountHandler(e, el.name, "stone", true)}
									/>
								</FormBox>
							) : (
								<ListBox name={el.name} onTitlehandler={onStoneTitleHandler}>
									{matarialList.slice(0, 3)}
								</ListBox>
							)}
						</SettingRow>
					))}
				</SettingBox>
				<br />

				{/* 캐릭터 추가 */}
				<h3>새로운 캐릭터를 추가해보세요</h3>
				<SettingBox></SettingBox>

				<SaveBtn>저장</SaveBtn>
			</SettingSection>
		</>
	);
}

export default Setting;
