import React from 'react';
import Navbar from './components/Navbar';
import Notegroup from './components/NoteGroup';
import FormGroup from './components/FormGroup';
import ViewGroup from './components/ViewGroup';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
	
		state = {
			items: [],
			key: '',
			item : '',
			editItem : false
		};
	

	onInputChange = (e) => {
		this.setState({
			item: e.target.value
		})

		console.log()
	};
	render() {
		return (
			<div className="App">
				<section className="hero ">
					<div className="model ">
						<div className="model_divider"></div>
						<Navbar />
						<Notegroup />
						<FormGroup item={this.state.item} handleInputChange = {this.onInputChange}/>
						<ViewGroup />
					</div>
				</section>
			</div>
		);
	}
}
export default App;
