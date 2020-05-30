import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class ViewList extends React.Component {
	render() {
		const { title, timeStamp, deleteItem, editItem } = this.props;
		return (
			<Row>
				<Col className="col-sm-1" xl={3}></Col>
				<Col sm={10} xl={6}>
					<div className="view shadow-lg">
						<div className="view-items">
							<h3 className="view-items-text">
								<strong>{title}</strong>
							</h3>
						</div>

						<div className="view-items">
							<div className="view-items-timeline ">
								<p className="view-items-timeline-today mr-2">Today</p>
								<p className="view-items-timeline-time">{timeStamp}</p>
							</div>
							<div className="view-items-icons">
								<span className="mx-2 text-success " onClick={editItem}>
									<button className="btn btn-sm btn-info px-3">
										Edit
										<i className="fas fa-pen ml-2"></i>
									</button>
								</span>
								<span className="mx-2 text-danger" onClick={deleteItem}>
									<button className="btn btn-sm btn-danger">
										Delete
										<i className="fas fa-trash ml-2"></i>
									</button>
								</span>
							</div>
						</div>
					</div>
				</Col>
				<Col className="col-sm-1" xl={3}></Col>
			</Row>
		);
	}
}
