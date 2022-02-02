import axios from "axios";
import { createAction, handleActions } from "redux-actions";
axios.defaults.withCredentials = true;

// actions type
<<<<<<< HEAD
const GET_LOGIN = "GET_LOGIN";

// action
export const getUserInfo = () => (dispatch: any) => {
	axios.get(`${process.env.REACT_APP_API_URL}user`).then((el) => {
		if (el.data.userInfo) {
			// dispatch(getLogin(el.data.userInfo));
		}
	});
};

// initialState
const initialState = {
	userInfo: {},
};

// reducer
export const user = (state = initialState, action: any) => {
	switch (action.type) {
		case GET_LOGIN:
			return { ...state, userInfo: action.payload, isLogin: true };

		default:
			return state;
	}
};
=======
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
	{ [GET_USERS]: (state, action) => ({ list: state.list }) },
	initialState
);
>>>>>>> dev

export default user;
