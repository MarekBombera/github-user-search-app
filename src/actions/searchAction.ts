import { SEARCH_USER } from "./types";

export interface searchAction {
	type: string;
	payload: string;
}

export const searchUser = (term: string): searchAction => {
	return {
		type: SEARCH_USER,
		payload: term,
	};
};
