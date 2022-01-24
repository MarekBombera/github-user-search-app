import { useSelector, useDispatch } from "react-redux";
import { searchUser, fetchUser } from "../actions/";
import { RootState } from "../reducers/";

import search_icon from "../assets/images/icon-search.svg";

export const SearchBar = () => {
	const { searchReducer } = useSelector((state: RootState) => state);
	const dispatch = useDispatch();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (searchReducer.length === 0) {
			return;
		}
		dispatch(fetchUser(searchReducer));
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(searchUser(e.target.value));
	};

	return (
		<div className="app__searchBar">
			<form onSubmit={handleSubmit}>
				<div className="app__searchBar-input">
					<img src={search_icon}></img>
					<input
						onChange={handleInput}
						placeholder="Search GitHub username..."
					></input>
				</div>
				<div>
					<button>Search</button>
				</div>
			</form>
		</div>
	);
};
