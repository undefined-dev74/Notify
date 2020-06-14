import React from 'react';
import TodoList from './TodoList';
// import { Divider } from 'antd';
import { Container } from 'react-bootstrap';

class TodoGroup extends React.Component {
	render() {
		const {
			items,
			clearList,
			handleDelete,
			handleEdit,
			handleFavItem,
		} = this.props;
		return (
			<Container fluid>
				<section className="container">
					{items.map((item) => {
						return (
							<TodoList
								key={item.id}
								title={item.title}
								timeStamp={item.Time}
								deleteItem={() => handleDelete(item.id)}
								editItem={() => handleEdit(item.id)}
								handleFavItem={() => handleFavItem(item.id)}
								FavStatus={item.FavState}
							/>
						);
					})}
					{/* <div className="clearlist text-center">
						<button
							type="button"
							className="btn btn-danger shadow"
							onClick={clearList}>
							Clear Item
						</button>
					</div> */}
				</section>
			</Container>
		);
	}
}

export default TodoGroup;
