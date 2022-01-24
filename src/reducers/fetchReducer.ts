import { fetchAction } from "../actions/index";
import { FETCH_USER } from "../actions/types";

export const fetchReducer = (state: any = null, action: fetchAction) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload;

		default:
			return state;
	}
};
