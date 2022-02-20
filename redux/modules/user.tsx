import axios from "axios";
import { createAction, handleActions } from "redux-actions";
axios.defaults.withCredentials = true;

// actions type
const GET_USERS = "user/GET_USERS" as const; // 유저 조회
const PUT_RAID_TOGGLE = "user/PUT_RAID_TOGGLE" as const; // 레이드 토글 전환
const PUT_RAID_TOGGLE_ON = "user/PUT_RAID_TOGGLE_ON" as const; // 레이드 토글 온

// action
export const getUsers = createAction(GET_USERS);
export const putRaidToggle = createAction(PUT_RAID_TOGGLE);
export const putRaidToggleOn = createAction(PUT_RAID_TOGGLE_ON);

// initialState
interface IUserState {
	userData?: object[];
}

const initialState: IUserState = {
	userData: [
		{
			name: "카엔이었소",
			job: "창술사",
			list: [
				{ name: "아르고스", gold: 1300, boolean: true },
				{ name: "발탄 노말", gold: 1300, boolean: true },
			],
			raid: { name: "레이드", toggle: true },
		},
		{
			name: "카엔입니다",
			job: "배틀마스터",
			list: [{ name: "아르고스", gold: 1300, boolean: true }],
			raid: { name: "레이드", toggle: true },
		},
	],
};

// reducer
export const user = handleActions(
	{
		[GET_USERS]: (state: any, action) => ({ list: state.list }),
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
	},
	initialState
);

export default user;
