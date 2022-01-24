import { SearchBar } from "./SearchBar";
import { Panel } from "./Panel";
import "../assets/styles/css/styles.css";

export const App = () => {
	return (
		<div className="app">
			<SearchBar />
			<Panel />
		</div>
	);
};
