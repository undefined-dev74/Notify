import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const curTime = new Date().toLocaleTimeString('en-US', {
	hour12: false,
	hour: 'numeric',
	minute: 'numeric',
});

// initial State
const initialState = {
	initTodo: [
		{
			items: [],
			id: Math.floor(1000 + Math.random() * 9000),
			item: '',
			editItem: false,
			curTime,
		},
	],
};

// Global Context 
export const globalContext = createContext(initialState)

// Global Provider 

export const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const handleDelete = (id) => {
		dispatch({
			type: 'DELETE_TODO',
			payload: id
		})
	};

	const deleteAllTodo = () => {
		dispatch({
			type: 'DELETE_ALL_TODO',
			payload: items
		})
	};
	return <globalContext.Provider value = {{todos : state.initTodo, handleDelete}}>
		{children}
	</globalContext.Provider>
}