import React from 'react';

class ViewGroup extends React.Component {

    constructor(props) {
        super(props)
        const {text , key} = props;
    }
	render() {
		return (
			<section className="container p-0 m-0">
				<div className="view shadow-lg">
					<div className="view-body">
						<div className="view-items custom-control custom-checkbox">
							<li>
								<input
									type="checkbox"
									className="custom-control-input"
									id="customCheck1"
								/>
								<label
									className="view-items-text custom-control-label"
									htmlFor="customCheck1">
									{this.props.text}
								</label>
							</li>
							<h6 className="view-today">Today</h6>
							<h6 className="view-time">6:00am</h6>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ViewGroup;
