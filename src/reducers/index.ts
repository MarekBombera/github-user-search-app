import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { fetchReducer } from "./fetchReducer";

export const rootReducer = combineReducers({
	searchReducer,
	fetchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
