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
		curTime : 0
	};

	onInputChange = (e) => {
		this.setState ({
			item: e.target.value,
			curTime: new Date().toLocaleTimeString('en-US', { hour12: false, 
				hour: "numeric", 
				minute: "numeric"})
		});
		
	};

	handleSubmit = (e) => {
		// this will prevent form to reload when we enter input
		e.preventDefault();

		const newItem = {
			id: this.state.id,
			title: this.state.item,
			Time : this.state.curTime
		};

		const updatedItems = [...this.state.items, newItem];
		console.log(updatedItems);

		this.setState({
			items: updatedItems,
			item: " ",
			id:  Math.floor(1000 + Math.random() * 9000),
			editItem: false,
			curTime: new Date().toLocaleTimeString()
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
						/>
						<ViewGroup items={this.state.items}/>
					</div>
				</section>
			</div>
		);
	}
}
export default App;
