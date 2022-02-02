<<<<<<< HEAD
// redux
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createAction } from "redux-actions";
// import promiseMiddlerware from "redux-promise";

import user from "./modules/user";

// middlewares

// redux router
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

// combineReducers
const appReducer = combineReducers({
=======
import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import user from "./modules/user";

/*
? ducks type으로 제작된 reducer들을 하나의 reducer로 만든다.
? 현재는 todo밖에 없지만, 다른 reducer가 추가될 상황을 가정하여 개방하는 의미도 있다.
*/
const rootReducer = combineReducers({
>>>>>>> dev
	user,
});

//? 합쳐진 리듀서에 next reddux wrapper hydrate 타입 리듀서를 추가한다.
//? hydrate는 서버에서 생성된 리덕스 스토어를 클라이언트에서 사용할 수 있도록 전달해 주는 역할을 한다.
const reducer = (state: any, action: any) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state,
			...action.payload,
		};
		return nextState;
	}
	return rootReducer(state, action);
};

//? store type
export type RootState = ReturnType<typeof rootReducer>;

<<<<<<< HEAD
const rootReducer = (state: any, action: any) => {
	if (action.type === "root/RESET_REDUCER") {
		return appReducer(undefined, action);
=======
//? middleware 적용을 위한 store enhancer
//? 리덕스 미들웨어는 액션이 디스패치 되어 리듀서에서 처리하기 전에 사전에 지정된 작업들을 의미한다.
//? 리덕스 데브툴즈 확장 프로그램을 사용하기 위해 미들웨어에 리덕스 데브툴즈를 사용하도록 하는 코드.
const bindMiddleware = (middleware: any) => {
	if (process.env.NODE_ENV !== "production") {
		const { composeWithDevTools } = require("redux-devtools-extension");
		return composeWithDevTools(applyMiddleware(...middleware));
>>>>>>> dev
	}
	return applyMiddleware(...middleware);
};

<<<<<<< HEAD
const env = process.env.REACT_APP_NODE_ENV;
// const middlewares = [thunk.withExtraArgument({ history })];

// const enhancer =
// 	env === "development"
// 		? composeWithDevTools(applyMiddleware(...middlewares))
// 		: compose(applyMiddleware(...middlewares));

// const store = createStore(rootReducer, enhancer);
const store = createStore(rootReducer);
export default store;
=======
const initStore = () => {
	return createStore(reducer, bindMiddleware([]));
};

export const wrapper = createWrapper(initStore);
>>>>>>> dev
