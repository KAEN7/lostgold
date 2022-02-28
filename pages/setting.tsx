/* Setting 페이지
 * 현재 명파 가격 캐릭터당 어떤 레이드인지 지정
 */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ListBox from "../components/atoms/ListBox";
import Header from "../components/Header";
import { flexCenter, flexCenterDir, pageDefault, color } from "../styles/theme";
import {
	getUsers,
	putRaidToggle,
	putRaidToggleOn,
	putHonerStoneToggle,
	putStoneToggle,
	putHonerStoneName,
	putStoneName,
} from "../redux/modules/user";
import MatarialInfo from "../components/MatarialInfo";

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

	useEffect(() => {
		interface IStorage {
			name: string;
			src: string;
			value: number;
			toggle: boolean;
		}

		let temp: string | null = localStorage.getItem("matarialList");
		const storage: IStorage[] = temp && JSON.parse(temp);
		storage
			? setMatarialList(storage)
			: localStorage.setItem("matarialList", JSON.stringify(matarialList));
	}, []);

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

	// 재료 리스트 핸들러
	const onMatarialHandler = (data: Array<any>) => {
		setMatarialList(data);
	};

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
		const gold = matarialList.find((el) => el.name === name);
		console.log(gold, "gold");
		if (title === "honorStone") {
			check
				? dispatch(
						putHonerStoneToggle({
							count: e.target.value,
							name: name,
							boolean: true,
							gold: gold ? gold.value : 0,
						})
				  )
				: dispatch(
						putHonerStoneToggle({
							count: e.target.value,
							name: name,
							boolean: false,
							gold: gold ? gold.value : 0,
						})
				  );
		} else if (title === "stone") {
			check
				? dispatch(
						putStoneToggle({
							count: e.target.value,
							name: name,
							boolean: true,
							gold: gold ? gold.value : 0,
						})
				  )
				: dispatch(
						putStoneToggle({
							count: e.target.value,
							name: name,
							boolean: false,
							gold: gold ? gold.value : 0,
						})
				  );
		}
	};

	// 재료명 변경 핸들러
	const onHonorStoneTitleHandler = (name: string, key: string) => {
		dispatch(putHonerStoneName({ name: key, stoneName: name, boolean: true }));
	};

	const onStoneTitleHandler = (name: string, key: string) => {
		console.log(name, key);
		dispatch(putStoneName({ name: key, stoneName: name, boolean: true }));
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
				<h3>해당 캐릭터의 휴게 기준 재료 수급개수를 적어주세요</h3>
				<SettingBox>
					{userData.length === 0 ? (
						<h3>캐릭터가 없습니다 새로 추가해보세요!</h3>
					) : (
						userData.map((el: any, idx: number) => (
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

										<input
											type="number"
											placeholder="개수"
											value={el.honorStone.count}
											onChange={(e) =>
												onCountHandler(e, el.name, "honorStone", true)
											}
										/>
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
											onClick={(e) =>
												onCountHandler(e, el.name, "stone", false)
											}
										>
											{el.stone.name}:
										</span>
										<input
											type="number"
											placeholder="개수"
											value={el.stone.count}
											onChange={(e) =>
												onCountHandler(e, el.name, "stone", true)
											}
										/>
									</FormBox>
								) : (
									<ListBox name={el.name} onTitlehandler={onStoneTitleHandler}>
										{matarialList.slice(0, 3)}
									</ListBox>
								)}
							</SettingRow>
						))
					)}
				</SettingBox>
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
