/* Setting 페이지
 * 현재 명파 가격 캐릭터당 어떤 레이드 인지 지정
 */

import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { flexCenterDir, pageDefault, color } from "../styles/theme";

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
	justify-content: ${(props) => props.defaultStyle && "space-between"};
	flex-wrap: ${(props) => props.defaultStyle && "wrap"};

	width: 30rem;
	padding: 1rem;
	margin: 2rem 0;
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
`;

// 아이템 박스
const ItemBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 10rem;
	color: black;
	margin: 0.5rem;

	.subTitle {
		width: fit-content;
		margin-right: 0.3rem;
	}

	.goldInput {
		width: 3rem;
		border: none;
		border-bottom: 0.1rem solid ${color.darkPoint};
		outline: none;
		color: ${color.point};
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

// 버튼 스타일 추후에 Storybook으로 전환
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

	// 재료 input값 변경
	const onChangeMatarial = (e: any, idx: number) => {
		const temp = matarialList.map((el, index) =>
			idx === index ? { ...el, value: e.target.value } : el
		);
		setMatarialList(temp);
	};

	return (
		<>
			<Header title="setting" />
			<SettingSection>
				<br />
				<h3>각 재료들의 판매 가격을 적어주세요</h3>
				<SettingBox defaultStyle={true}>
					{matarialList.map((el, idx) => (
						<ItemBox key={`item${idx}`}>
							<></>
							<h4 className="subTitle">{el.name}</h4>
							{el.value === 0 && el.toggle ? (
								<input
									type="number"
									className="goldInput"
									value={el.value}
									onChange={(e) => onChangeMatarial(e, idx)}
								/>
							) : (
								<span className="gold">{el.value}G</span>
							)}
						</ItemBox>
					))}
				</SettingBox>
				<br />
				<h3>해당 캐릭터의 휴게 기준 2수 재료 수급개수를 적어주세요</h3>
				<SettingBox>
					<SettingRow>
						<>캐릭명</>
						<>레이드</>
						<>명파</>
						<>개수</>
						<>파괴석</>
						<>개수</>
					</SettingRow>
				</SettingBox>
				<br />
				<h3>새로운 캐릭터를 추가해보세요</h3>
				<SettingBox></SettingBox>

				<SaveBtn>저장</SaveBtn>
			</SettingSection>
		</>
	);
}

export default Setting;
