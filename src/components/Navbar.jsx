import React from 'react';

class Navbar extends React.Component {
	render() {
		return (
            <div>

			<nav className=" model_nav navbar">
				<a className="model_brand navbar-brand" href="">
					Edittor
					<i className=" model_brand-icon fas fa-pen-square"></i>
				</a>

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
			</nav>
    
            </div>
		);
	}
}

export default Navbar;
