import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_USER } from "./types";

const url = "https://api.github.com/users/";

export interface fetchAction {
	type: string;
	payload: object;
}

export const fetchUser = (searchTerm: string) => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get(`${url}${searchTerm}`);
		console.log(response);

		dispatch<fetchAction>({
			type: FETCH_USER,
			payload: response.data,
		});
	};
};
