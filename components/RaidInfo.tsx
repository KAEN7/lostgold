import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { color } from "../styles/theme";
import {
	putRaidToggle,
	putRaidToggleOn,
	putHonerStoneToggle,
	putStoneToggle,
	putHonerStoneName,
	putStoneName,
} from "../redux/modules/user";
import ListBox from "../components/atoms/ListBox";

const SettingRow = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: ${color.black};
	margin: 0.5rem;
	flex-wrap: wrap;
`;

const RestHeader = styled.span`
	font-weight: bold;
	padding-right: 0.5rem;
	border-right: 0.2rem solid ${color.darkPoint};
`;

interface IRaidInfo {
	SettingBox?: any;
	ItemBox?: any;
	FormBox?: any;
	matarialList: any;
}

const RaidInfo: React.FC<IRaidInfo> = ({
	SettingBox,
	FormBox,
	matarialList,
}) => {
	const dispatch = useDispatch();
	const userData = useSelector((state: any) => state.user.userData);

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
		const gold = matarialList.find((el: any) => el.name === name);
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

	return (
		<>
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
								<FormBox onSubmit={(e: any) => e.preventDefault()}>
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
								<FormBox onSubmit={(e: any) => e.preventDefault()}>
									<span
										onClick={(e) => onCountHandler(e, el.name, "stone", false)}
									>
										{el.stone.name}:
									</span>
									<input
										type="number"
										placeholder="개수"
										value={el.stone.count}
										onChange={(e) => onCountHandler(e, el.name, "stone", true)}
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
		</>
	);
};

export default RaidInfo;
