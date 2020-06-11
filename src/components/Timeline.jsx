import React from 'react';
import { Row, Col } from 'react-bootstrap';
class Timeline extends React.Component {
	render() {
		return (
			<Row className="mt-sm-4 mt-xl-0">
				<Col className=" col-lg-3"></Col>
				<div className="timeline ">
					<Col
						xs={12}
						xl={'auto'}
						lg={'auto'}
						className="d-flex justify-content-sm-between justify-content-xl-around align-items-center">
						<h1 className="timeline_headline">Today</h1>
						<ul className="timeline_nav">
							<li className="timeline_nav-icons">
								<i className=" fas fa-sun"></i>
							</li>
							<li className="timeline_nav-icons">
								<i className=" fas fa-user-tag"></i>
							</li>
							<li className="timeline_nav-icons">
								<i className=" fas fa-ellipsis-h"></i>
							</li>
						</ul>
					</Col>
				</div>
				<Col lg={3} xl={3}></Col>
			</Row>
		);
	}
}

export default Timeline;
