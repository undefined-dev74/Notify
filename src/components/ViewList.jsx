import React from 'react';
// import Viewgroup from './ViewGroup';

export default class ViewList extends React.Component {
	render() {
		const { title, timeStamp } = this.props;
		return (
			<div className="view shadow-lg">
				<div className="view-items">
					<h3 className="view-items-text">{title}</h3>
				</div>
				<div className="view-timeline ">
					<p className="view-today mr-2">Today</p>
					<p className="view-time">{timeStamp}</p>
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
		);
	}
}
