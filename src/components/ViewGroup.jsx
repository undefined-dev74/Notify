import React from 'react';
import ViewList from './ViewList';

class ViewGroup extends React.Component {
	render() {
		const { items, clearList, handleDelete, handleEdit } = this.props;
		return (
			<section className="container">
				{items.map((item) => {
					return (
						<ViewList
							key={item.id}
							title={item.title}
							timeStamp={item.Time}
							deleteItem={() => handleDelete(item.id)}
							editItem={() => handleEdit(item.id)}
						/>
					);
				})}
				<div className="clearlist text-center">
					<button
						type="button"
						className="btn btn-danger shadow"
						onClick={clearList}>
						Clear Item
					</button>
				</div>
				
			</section>
		);
	}
}

export default ViewGroup;
