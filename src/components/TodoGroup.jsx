import React from 'react';
<<<<<<< HEAD:src/components/ViewGroup.jsx
import ViewList from './ViewList';
=======
import TodoList from './TodoList';
// import { Divider } from 'antd';
>>>>>>> react-editnoter:src/components/TodoGroup.jsx
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
