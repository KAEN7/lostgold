import axios from "axios";
import { createAction, handleActions } from "redux-actions";
axios.defaults.withCredentials = true;

// actions type
const GET_USERS = "user/GET_USERS" as const; // 유저 조회
const PUT_RAID_TOGGLE = "user/PUT_RAID_TOGGLE" as const; // 레이드 토글 전환
const PUT_RAID_TOGGLE_ON = "user/PUT_RAID_TOGGLE_ON" as const; // 레이드 토글 온
const PUT_HONER_STONE_TOGGLE = "user/PUT_HONER_STONE_TOGGLE" as const; // 돌파석 토글 전환
const PUT_HONER_STONE_NAME = "user/PUT_HONER_STONE_NAME" as const; // 돌파석 이름 변경
const PUT_STONE_TOGGLE = "user/PUT_STONE_TOGGLE" as const; // 파괴석 토글 전환
const PUT_STONE_NAME = "user/PUT_STONE_NAME" as const; // 파괴석 이름 변경

// action
export const getUsers = createAction(GET_USERS);
export const putRaidToggle = createAction(PUT_RAID_TOGGLE);
export const putRaidToggleOn = createAction(PUT_RAID_TOGGLE_ON);
export const putHonerStoneToggle = createAction(PUT_HONER_STONE_TOGGLE);
export const putHonerStoneName = createAction(PUT_HONER_STONE_NAME);
export const putStoneToggle = createAction(PUT_STONE_TOGGLE);
export const putStoneName = createAction(PUT_STONE_NAME);

// initialState
interface IUserState {
	userData?: object[];
}

// ! 임시 데이터
// {
// 	name: "카엔이었소",
// 	job: "창술사",
// 	level: 0,
// 	list: [
// 		{ name: "아르고스", gold: 1300, boolean: true },
// 		{ name: "발탄 노말", gold: 1300, boolean: true },
// 	],
// 	raid: { name: "레이드", toggle: true },
// 	honorStone: { name: "돌파석", count: 0, boolean: true, gold: 0 },
// 	stone: { name: "파괴석", count: 0, boolean: true, gold: 0 },
// },
// {
// 	name: "카엔입니다",
// 	job: "배틀마스터",
// 	level: 0,
// 	list: [{ name: "아르고스", gold: 1300, boolean: true }],
// 	raid: { name: "레이드", toggle: true },
// 	honorStone: { name: "돌파석", count: 0, boolean: true, gold: 0 },
// 	stone: { name: "파괴석", count: 0, boolean: true, gold: 0 },
// },

const initialState: IUserState = {
	userData: [],
};

// reducer
export const user = handleActions(
	{
		[GET_USERS]: (state: any, action) => ({
			...state,
			userData: [...state.userData, action.payload],
		}),
		// 레이드 세팅
		[PUT_RAID_TOGGLE]: (state: any, action) => ({
			...state,
			userData: state.userData.map((el: any) =>
				el.name === action.payload.charName
					? {
							...el,
							raid: {
								name: action.payload.name,
								toggle: action.payload.toggle,
							},
					  }
					: el
			),
		}),
		[PUT_RAID_TOGGLE_ON]: (state: any, action) => ({
			...state,
			userData: state.userData.map((el: any) =>
				el.name === action.payload.charName
					? {
							...el,
							raid: {
								name: el.raid.name,
								toggle: action.payload.toggle,
							},
					  }
					: el
			),
		}),
		// 재료 세팅
		[PUT_HONER_STONE_TOGGLE]: (state: any, action) => ({
			...state,
			userData: state.userData.map((el: any) =>
				el.name === action.payload.name
					? {
							...el,
							honorStone: {
								...el.honorStone,
								name: el.honorStone.name,
								count: action.payload.count,
								boolean: action.payload.boolean,
							},
					  }
					: el
			),
		}),
		[PUT_HONER_STONE_NAME]: (state: any, action) => ({
			...state,
			userData: state.userData.map((el: any) =>
				el.name === action.payload.name
					? {
							...el,
							honorStone: {
								...el.honorStone,
								name: action.payload.stoneName,
								boolean: action.payload.boolean,
							},
					  }
					: el
			),
		}),
		[PUT_STONE_TOGGLE]: (state: any, action) => ({
			...state,
			userData: state.userData.map((el: any) =>
				el.name === action.payload.name
					? {
							...el,
							stone: {
								...el.stone,
								name: el.stone.name,
								count: action.payload.count,
								boolean: action.payload.boolean,
							},
					  }
					: el
			),
		}),
		[PUT_STONE_NAME]: (state: any, action) => ({
			...state,
			userData: state.userData.map((el: any) =>
				el.name === action.payload.name
					? {
							...el,
							stone: {
								...el.stone,
								name: action.payload.stoneName,
								boolean: action.payload.boolean,
							},
					  }
					: el
			),
		}),
	},
	initialState
);

export default user;
