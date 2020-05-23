import React from 'react';

class FormGroup extends React.Component {
	


	render() {
		const {item, handleInputChange, handleSubmit} = this.props;
		return (
			<form className="form_group" onSubmit={handleSubmit}>
				<input 
					className=" text-input form-control shadow-sm"
					placeholder="write a note or paste a link"
					value={item }
					onChange={handleInputChange}></input>
				<i className="form_group-icon addbtn fas fa-2x fa-plus-circle" onClick={handleSubmit}></i>
			</form>
		);
	}
}

export default FormGroup;
