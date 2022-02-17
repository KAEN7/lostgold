import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./modules/user";

// combine으로 리덕스를 묶어줌
const rootReducer = combineReducers({
	user,
});

// 합쳐진 리듀서에 next reddux wrapper hydrate 타입 리듀서를 추가한다.
// hydrate는 여러개 생성되는 스토어를 하나로 묶어줍니다
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

// store type 적용
export type RootState = ReturnType<typeof rootReducer>;

// persist 설정
const persistConfig = {
	key: "root",
	storage,
};

// persist 적용 리듀서
export const persistedReducer = persistReducer(persistConfig, rootReducer);

//? middleware 적용을 위한 store enhancer
//? 리덕스 미들웨어는 액션이 디스패치 되어 리듀서에서 처리하기 전에 사전에 지정된 작업들을 의미하며
//? 리덕스 데브툴즈를 사용하기 위해 미들웨어에 리덕스 데브툴즈를 사용하도록 합니다
const bindMiddleware = (middleware: any) => {
	if (process.env.NODE_ENV !== "production") {
		const { composeWithDevTools } = require("redux-devtools-extension");
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(...middleware);
};

const initStore = () => {
	return createStore(reducer, bindMiddleware([]));
};

export const wrapper = createWrapper(initStore);
