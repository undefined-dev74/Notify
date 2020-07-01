import React from 'react';
import TodoList from '../TodoList';
import classes from './FavoriteTodoList.module.css';

const FavoriteTodoList = (props) => {
    
    return (
        props.show?<div className={classes.FavoriteTodoList_cnt}>
            <h3 className={classes.heading}>Favorite Todos</h3>
            <div className={classes.list}>
                {
                    props.ListItems.map((item)=>{
                        return(
                            <TodoList
                                    key={item.id}
                                    title={item.title}
                                    timeStamp={item.Time}
                            />
                        )
                    })
                }

            </div>
        </div>:null
    )
}

export default FavoriteTodoList;