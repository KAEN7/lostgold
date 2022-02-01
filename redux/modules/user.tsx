import axios from "axios";
axios.defaults.withCredentials = true;

// actions type
const GET_USERS = "GET_USERS";

// action
export const getLogin = (data: any) => {
	return {
		type: GET_USERS,
		payload: data,
	};
};

// initialState
const initialState = {
	userData: [
		{ name: "닉네임", job: "창술사" },
		{ name: "닉네임", job: "배틀마스터" },
	],
};

// reducer
export const user = (state = initialState, action: any) => {
	switch (action.type) {
		case GET_USERS:
			return { ...state, userInfo: action.payload, isLogin: true };

		default:
			return state;
	}
};

export default user;
