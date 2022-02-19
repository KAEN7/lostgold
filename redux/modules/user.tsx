import axios from "axios";
import { createAction, handleActions } from "redux-actions";
axios.defaults.withCredentials = true;

// actions type
const GET_USERS = "user/GET_USERS"; // 유저 조회
const PUT_RAID_TOGGLE = "user/PUT_RAID_TOGGLE"; // 레이드 토글 전환

// action
export const getUsers = createAction(GET_USERS);
export const putRaidToggle = createAction(PUT_RAID_TOGGLE);

// initialState
const initialState = {
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
			raid: { name: "레이드", toggle: false },
		},
	],
};

interface initState {
	userData?: [];
}

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
	},
	initialState
);

export default user;
