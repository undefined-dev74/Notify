import React from 'react';
import {Row, Col } from 'react-bootstrap';
class Notegroup extends React.Component {
	render() {
		return (
			<Row className='mt-sm-4 mt-xl-0'>
				<Col className='d-sm-none'></Col>
				<div className="notegroup ">
					<Col xs={12} className='d-flex justify-content-lg-around justify-content-sm-between align-items-center'>
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
					</Col>
				</div>
				<Col className='d-sm-none'></Col>
			</Row>
		);
	}
}

export default Notegroup;
