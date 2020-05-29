import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className=" model_nav navbar">
					<Col
						xs={6}
						lg={3}
						className="d-flex justify-content-center justify-content-sm-center order-sm-1 order-xl-1">
						<a className="model_brand navbar-brand" href="">
							Edittor
							<i className=" model_brand-icon fas fa-pen-square"></i>
						</a>
					</Col>
					<Col xs={12} lg={6} className="d-flex justify-content-center order-sm-12 order-xl-2">
						<div className=" model_form form-group mb-0">
							<div className=" search_icon">
								<i className=" search_icon-i fas fa-search"></i>
								<input
									type="search"
									className="model_search form-control "
									id="search"
									placeholder="Search anything"
								/>
							</div>
						</div>
					</Col>

					<Col xs={6} lg={3} className="d-flex justify-content-end order-sm-2 order-xl-3">
						<ul className="navbar-nav">
							<li className="nav-item active" id="settings">
								<a className="nav-link " href="">
									<i className=" fas fa-2x fa-cog"></i>
								</a>
							</li>
							<li className="nav-item" id="notifications">
								<a className="nav-link " href="">
									<i className=" far fa-2x fa-bell"></i>
								</a>
							</li>
							<li className="nav-item" id="userpanel">
								<a className="nav-link " href="">
									<i className=" fas  fa-2x fa-plus-square"></i>
								</a>
							</li>
						</ul>
					</Col>
				</nav>
			</div>
		);
	}
}

export default Navbar;
