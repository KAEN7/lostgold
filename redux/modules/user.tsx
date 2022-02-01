import axios from "axios";
axios.defaults.withCredentials = true;

// actions type
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

export default user;
