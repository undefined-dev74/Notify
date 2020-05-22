import React from 'react';

class ViewGroup extends React.Component {
	constructor(props) {
		super(props);
		const { text, key } = props;
	}
	render() {
		return (
			<section className="container">
				<div className="view shadow-lg">
						<div className="view-items">
							<h3 className="view-items-text">Wash car Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ut!</h3>
						</div>
						<div className="view-timeline ">
							<p className="view-today mr-2">Today</p>
							<p className="view-time">6:00am</p>
						</div>
						<div className="view_icons">
							<span className="mx-2 text-success">
								<i className="fas fa-pen"></i>
							</span>
							<span className="mx-2 text-danger">
								<i className="fas fa-trash"></i>
							</span>
						</div>
				</div>
			</section>
		);
	}
}

export default ViewGroup;
