import React from 'react';

class FormGroup extends React.Component {
	

	addItem = (event) => {
		event.preventDefault();
		console.log('click fired')
	};

	render() {
		const {item, handleInputChange} = this.props;
		return (
			<div className="form_group">
				<textarea
					className=" text-input form-control shadow-sm"
					rows="2"
					aria-label="With textarea"
					placeholder="write a note or paste a link"
					value={item }
					onChange={handleInputChange}></textarea>
				<i className="form_group-icon addbtn fas fa-2x fa-plus-circle" onClick={this.addItem}></i>
			</div>
		);
	}
}

export default FormGroup;
