import React,{useState} from 'react';
import * as actions from './ActionType'
export default (state, action) => {
	if (action.type === actions.handleDelete) {
		return {
			...state,
			todos: state.initTodo.filter((todo) => todo.id !== action.payload),
		};
    } else if(action.type === actions.deleteAllTodo){
        return {
             [items, setItems] : useState(null),
		    if(todos.items.length === 0){
			setItems(items = [])
		}
        }
    }
    return state;
};
