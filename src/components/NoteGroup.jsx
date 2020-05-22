import React from 'react';

class Notegroup extends React.Component {
	render() {
		return (
			<div className="notegroup">
				<h1 className="notegroup_headline">Today</h1>
				<ul className="notegroup_nav">
					<li className="notegroup_nav-icons">
						<i className=" fas fa-sun"></i>
					</li>
					<li className="notegroup_nav-icons">
						<i className=" fas fa-user-tag"></i>
					</li>
					<li className="notegroup_nav-icons">
						<i className=" fas fa-ellipsis-h"></i>
					</li>
				</ul>
			</div>
		);
	}
}

export default Notegroup;
