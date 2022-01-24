import { useSelector } from "react-redux";
import { RootState } from "../reducers/";

import location_icon from "../assets/images/icon-location.svg";
import twitter_icon from "../assets/images/icon-twitter.svg";
import company_icon from "../assets/images/icon-company.svg";
import website_icon from "../assets/images/icon-website.svg";

export const Panel = () => {
	const { fetchReducer } = useSelector((state: RootState) => state);

	if (fetchReducer === null) {
		return <div></div>;
	}

	const data = (property: string | null): string => {
		if (property !== null) {
			return property;
		}
		return "";
	};

	return (
		<div className="app__panel">
			<div className="app__panel-avatar">
				<img src={data(fetchReducer.avatar_url)} alt="avatar" />
			</div>
			<div className="app__panel-content">
				<div className="app__panel-header">
					<div className="app__panel-name">
						<h1>{data(fetchReducer.name)}</h1>
						<h4>@{data(fetchReducer.login)}</h4>
						<p>{data(fetchReducer.bio)}</p>
					</div>
					<div className="app__panel-date">
						<p>{data(fetchReducer.created_at)}</p>
					</div>
				</div>
				<div className="app__panel-userInfo">
					<div className="app__panel-userInfo-repos">
						<h3>Repos</h3>
						<h2>{data(fetchReducer.public_repos)}</h2>
					</div>
					<div className="app__panel-userInfo-followers">
						<h3>Followers</h3>
						<h2>{data(fetchReducer.followers)}</h2>
					</div>
					<div className="app__panel-userInfo-following">
						<h3>Following</h3>
						<h2>{data(fetchReducer.following)}</h2>
					</div>
				</div>
				<div className="app__panel-social">
					<div className="app__panel-social-1">
						<div className="app__panel-social-location">
							<img src={location_icon}></img>
							<p>{data(fetchReducer.location)}</p>
						</div>
						<div className="app__panel-social-twitter">
							<img src={twitter_icon}></img>
							<p>@{data(fetchReducer.twitter_username)}</p>
						</div>
					</div>
					<div className="app__panel-social-2">
						<div className="app__panel-social-website">
							<img src={website_icon}></img>
							<p>{data(fetchReducer.blog)}</p>
						</div>
						<div className="app__panel-social-company">
							<img src={company_icon}></img>
							<p>{data(fetchReducer.company)}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
