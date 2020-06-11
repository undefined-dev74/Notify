import React from 'react';
import Navbar from './components/Navbar';
import Notegroup from './components/NoteGroup';
import FormGroup from './components/FormGroup';
import ViewGroup from './components/ViewGroup';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
	state = {
		items: [],
		id: Math.floor(1000 + Math.random() * 9000),
		item: '',
		editItem: false,
		curTime: 0,
	};

	onInputChange = (e) => {
		this.setState({
			item: e.target.value,
			curTime: new Date().toLocaleTimeString('en-US', {
				hour12: false,
				hour: 'numeric',
				minute: 'numeric',
			}),
		});
	};

	handleSubmit = (e) => {
		// this will prevent form to reload when we enter input
		e.preventDefault();

		const newItem = {
			id: this.state.id,
			title: this.state.item,
			Time: this.state.curTime,
		};

		const updatedItems = [...this.state.items, newItem];

		this.setState({
			items: updatedItems,
			item: ' ',
			id: Math.floor(1000 + Math.random() * 9000),
			editItem: false,
			curTime: new Date().toLocaleTimeString(),
		});
	};
	// somehow i am unable to delete the items
	clearList = () => {
		const newArr = [];
		if (this.state.items.length !== 0) {
			this.setState = {
				items: newArr,
			};
		}
		console.log(this.state.items);
	};

	// this func will delele invidual item

	handleDelete = (id) => {
		const filteredItems = this.state.items.filter((item) => item.id !== id);
		this.setState({
			items: filteredItems,
		});
	};

	handleEdit = (id) => {
		console.log(id);
		const filteredItems = this.state.items.filter((item) => item.id !== id);

		const selectedItem = this.state.items.find((item) => item.id === id);
		console.log(selectedItem);
		this.setState({
			items: filteredItems,
			item: selectedItem.title,
			editItem: true,
			id: id,
			curTime: new Date().toLocaleTimeString(),
		});
	};

	render() {
		return (
			<div className="App">
				<section className="hero ">
					<div className="model ">
						<div className="model_divider"></div>
						<Navbar />
						<Notegroup />
						<FormGroup
							item={this.state.item}
							handleInputChange={this.onInputChange}
							handleSubmit={this.handleSubmit}
							editItem={this.state.editItem}
						/>
						<ViewGroup
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
						/>
					</div>
				</section>
			</div>
		);
	}
}
export default App;
