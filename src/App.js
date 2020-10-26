import React from 'react';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import TodoInput from './components/TodoInput';
import TodoGroup from './components/TodoGroup';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import FavoriteTodoList from './components/FavoriteTodoList/FavoriteTodoList';
import NotificationBar from './components/NotificationBar/NotificationBar';

class App extends React.Component {
	state = {
		items: [],
		id: Math.floor(1000 + Math.random() * 9000),
		item: '',
		editItem: false,
		// curTime: new Date().toLocaleTimeString('en-US', {
		// 	hour12: false,
		// 	hour: 'numeric',
		// 	minute: 'numeric',
		// }),
		FavoriteItems:[],// This array will store our favorite items 
		showFavoriteTodoList:false,
		DarkFavList:false,
		ShowNotBar:false,
	};
	onInputChange = (e) => {
		this.setState ({
			item: e.target.value,
			curTime: this.state.curTime,
		});
	};

	NotificationBarToggler  = ()=>{
		
		this.setState((prevState)=>{
			console.log('hi');
			return{ShowNotBar:!prevState.ShowNotBar}
		})
	}

	handleSubmit = (e) => {
		// this will prevent form to reload when we enter input
		// e.preventDefault();

		const newItem = {
			id: this.state.id,
			title: this.state.item,
			// Time: this.state.curTime, // this approch give the time when the state was last updated 
			// But we want the time when we are making new todo
			Time:new Date().toLocaleTimeString('en-US', {
				hour12: false,
				hour: 'numeric',
				minute: 'numeric',
			}),
			FavState:false,// just to handle addition in fav list only once
		};

		const updatedItems = [...this.state.items, newItem];

		this.setState({
			items: updatedItems,
			item: ' ',
			id: Math.floor(1000 + Math.random() * 9000),
			editItem: false,
			// curTime: this.state.curTime,
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

	handleDelete = (id, e) => {
		
		const filteredItems = this.state.items.filter((item) => item.id !== id);
		this.setState({
			items: filteredItems,
		});
		if (this.state.items.length === 0) return (e.target.value = '');
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

	EditFavItemHandler = (id) => {
		console.log(id);
		const filteredItems = this.state.FavoriteItems.filter((item) => item.id !== id);

		const selectedItem = this.state.FavoriteItems.find((item) => item.id === id);
		console.log(selectedItem);
		this.setState({
			FavoriteItems: filteredItems,
			item: selectedItem.title,
			editItem: true,
			id: id,
			curTime: new Date().toLocaleTimeString(),
		});

	};
	ChangeFavStatus = (id)=>{
		let OldItems = [...this.state.items];
		let Index;
		const ReqItem = OldItems.filter((item,index)=>{
			if(item.id===id)
			{
				Index = index;
				return true;
			}
			return false;
		})// we got an array of single object 
		console.log('initially fav state', ReqItem[0].FavState);
		OldItems[Index].FavState=!OldItems[Index].FavState;
		this.setState({
			items:OldItems,
		})
		console.log('item is ',ReqItem);
	}

	handleFavItem = (id) => {
		this.ChangeFavStatus(id);
		const saveFavItem = this.state.items.filter((item) => item.id === id);
		
		const newFavoriteItem = saveFavItem;
		console.log('new fav state is ',newFavoriteItem[0].FavState);
		
		const OldFavoriteItemList = [...this.state.FavoriteItems];
		

		const UpdatedFavoriteItemList =[...OldFavoriteItemList,newFavoriteItem]
		.reduce((arr, ele) =>{return arr.concat(ele)},[]);;
		// we need to change an array of array to a single array 
		// so we reduced that 
		
		this.setState({
			FavoriteItems:UpdatedFavoriteItemList
		})

	};

	// Handle toggling of favorite list 
	showfavoriteListHandler = () =>{
		this.setState((prevstate)=>{
			return({showFavoriteTodoList:!prevstate.showFavoriteTodoList})
		})
	}

	DeleteFavItemHandler = (id,e) =>{
		const filteredItems = this.state.FavoriteItems.filter((item) => item.id !== id);
		this.setState({
			FavoriteItems: filteredItems,
		});
	}

	ChangetheThemeHandler = ()=>{
		this.setState((prevState)=>{
			return {DarkFavList:!prevState.DarkFavList};
		})
	}

	render() {
		return (
			<div className="App">
				<section className="hero ">
					<div className="model ">
						<Container fluid>
							<Row>
								<Col>
									<div className="model_divider"></div>
								</Col>
							</Row>
							<Row>
								 <Col>	
									<Navbar clicked = {this.showfavoriteListHandler}
										OpenNotifiBar={this.NotificationBarToggler}/>
								</Col>
							</Row>
							<Timeline />
							<Container>
								<TodoInput
									item={this.state.item}
									handleInputChange={this.onInputChange}
									handleSubmit={this.handleSubmit}
									editItem={this.state.editItem}
								/>
							</Container>
							<TodoGroup
								items={this.state.items}
								clearList={this.clearList}
								handleDelete={this.handleDelete}
								handleEdit={this.handleEdit}
								handleFavItem={this.handleFavItem}
							/>
							<FavoriteTodoList 
								ListItems ={this.state.FavoriteItems} 
								show={this.state.showFavoriteTodoList}
								DeleteFavItem = {this.DeleteFavItemHandler}
								EditFavItem = {this.EditFavItemHandler}
								DarkFavList={this.state.DarkFavList}
								ChangeTheme={this.ChangetheThemeHandler}/>
							<NotificationBar show={this.state.ShowNotBar}/>
						</Container>
					</div>
				</section>
			</div>
		);
	}
}
export default App;

// so now we are making a commit