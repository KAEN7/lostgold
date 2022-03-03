import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { persistReducer, PersistConfig } from "redux-persist";
import thunkMiddleware from "redux-thunk";
// import storage from "redux-persist/lib/storage";
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

const makeStore = ({ isServer }) => {
	if (isServer) {
		//If it's on server side, create a store
		return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
	} else {
		//If it's on client side, create a store which will persist
		const { persistStore, persistReducer } = require("redux-persist");

		const persistConfig = {
			key: "nextjs",
			whitelist: ["user"],
			storage,
		};

		const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

		const store = createStore(
			persistedReducer,
			bindMiddleware([thunkMiddleware])
		); // Creating the store again

		store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

		return store;
	}
};

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper(makeStore);
