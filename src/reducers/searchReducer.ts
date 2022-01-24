import { searchAction } from "../actions/index";

export const searchReducer = (
	state: string = "marekbombera",
	action: searchAction
) => {
	switch (action.type) {
		case "SEARCH_USER":
			return action.payload;

		default:
			return state;
	}
};
