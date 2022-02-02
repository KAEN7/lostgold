import axios from "axios";
import { createAction, handleActions } from "redux-actions";
axios.defaults.withCredentials = true;

// actions type
const GET_USERS = "user/GET_USERS";

// action
export const getUsers = createAction(GET_USERS);

// initialState
const initialState = {
	userData: [
		{
			name: "닉네임",
			job: "창술사",
			list: [{ name: "아르고스", gold: 1300, boolean: true }],
		},
		{
			name: "닉네임",
			job: "배틀마스터",
			list: [{ name: "아르고스", gold: 1300, boolean: true }],
		},
	],
};

// reducer

export const user = handleActions(
	{ [GET_USERS]: (state: any, action) => ({ list: state.list }) },
	initialState
);

export default user;
