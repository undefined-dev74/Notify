import React from 'react';
import swal from 'sweetalert'

class FormGroup extends React.Component {
	render() {
		const { item, handleInputChange, handleSubmit, editItem } = this.props;
		return (
			<form
				className="form_group"
				onSubmit={(e) => { e.preventDefault()
					item !== '' ? handleSubmit() :swal('Text Missing','You must continue with some text',"warning" );
				}}>
				<input
					className=" text-input form-control shadow-sm"
					placeholder="write a note or paste a link"
					value={item}
					onChange={handleInputChange}
					type="text"
					maxLength={80}></input>
				<i
					className="form_group-icon addbtn fas fa-2x fa-plus-circle"
					onClick={() => {
						item !== ''
							? handleSubmit()
							: swal('Text Missing','You must continue with some text',"warning" );
					}}></i>
				<div className="clearlist text-center">
					<button
						className={
							editItem ? 'btn btn-danger btn-success' : 'btn btn-danger'
						}>
						{editItem ? 'Edit note' : 'save note'}
					</button>
				</div>
			</form>
		);
	}
}

export default FormGroup;
