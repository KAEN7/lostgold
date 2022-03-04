import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import storage from "./sync_storage";
import user from "./modules/user";

//COMBINING ALL REDUCERS
const combinedReducer = combineReducers({
	user,
});

// BINDING MIDDLEWARE
const bindMiddleware = (middleware: any) => {
	if (process.env.NODE_ENV !== "production") {
		const { composeWithDevTools } = require("redux-devtools-extension");
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(...middleware);
};

const makeStore: any = ({ isServer }: { isServer: any }) => {
	if (isServer) {
		return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
	} else {
		const { persistStore, persistReducer } = require("redux-persist");

		const persistConfig = {
			key: "root",
			whitelist: ["user"],
			storage,
		};

		const persistedReducer = persistReducer(persistConfig, combinedReducer);

		const store: any = createStore(
			persistedReducer,
			bindMiddleware([thunkMiddleware])
		);

		store.__persistor = persistStore(store);

		return store;
	}
};

export const wrapper = createWrapper(makeStore);
