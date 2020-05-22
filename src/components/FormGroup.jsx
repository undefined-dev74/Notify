import React from 'react';

class FormGroup extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [],
			currentItem: {
				text: [],
				key: '',
			},
		};
	}

	handleInput = (e) => {
		this.setState = {
			text: e.target.value,
			key: Date.now(),
		};
		console.log();
	};

	addItem = (event) => {
		event.preventDefault();
		console.log('click fired')
	};

	render() {
		return (
			<div className="form_group">
				<textarea
					className=" text-input form-control shadow-sm"
					rows="1"
					aria-label="With textarea"
					placeholder="write a note or paste a link"
					value={this.state.currentItem.text}
					onChange={this.handleInput}></textarea>
				<i className="form_group-icon addbtn fas fa-2x fa-plus-circle" onClick={this.addItem}></i>
			</div>
		);
	}
}

export default FormGroup;
