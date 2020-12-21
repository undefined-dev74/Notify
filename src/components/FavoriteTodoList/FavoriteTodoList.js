import React, { Component } from 'react';
import TodoList from '../TodoList';
import classes from './FavoriteTodoList.module.css';


const FavoriteTodoList = (props) => {

    let FavListClasses;
    let FavListHeadingClasses;
    let EmptyFavListClasses;
    let FavListHeadingCntClasses;
    if(!props.DarkFavList){
        FavListClasses=classes.FavoriteTodoList_cnt;
        FavListHeadingClasses=classes.heading;
        EmptyFavListClasses=classes.EmptyList;
        FavListHeadingCntClasses=classes.heading;
    }else{
        FavListClasses=classes.FavoriteTodoList_cnt_Dark;
        FavListHeadingClasses=classes.heading_Dark;
        EmptyFavListClasses=classes.EmptyList_Dark;
        FavListHeadingCntClasses=classes.heading_cnt;
    }

    let EmptyFavlistMsg = null;
    if(props.ListItems.length===0)
    {
        EmptyFavlistMsg=<p className={EmptyFavListClasses}>
                            Add Some Todos to your Favorite List 
                        </p>
    }

    
    return (
        props.show?<div className={FavListClasses}>
            <div className={FavListHeadingClasses}>
                <div className={FavListHeadingCntClasses}>
                    Favorite Todos
                    <button onClick={props.ChangeTheme}>{!props.DarkFavList?'Dark':"Light"}</button>
                    </div>
                </div>
            <div>
                {EmptyFavlistMsg}
                {
                    
                    props.ListItems.map((item)=>{
                        return(
                            <TodoList
                                key={item.id}
                                title={item.title}
                                timeStamp={item.Time}
                                deleteItem={()=>props.DeleteFavItem(item.id)}
                                editItem = {()=>props.EditFavItem(item.id)}
                            />
                        )
                    })
                }

            </div>
        </div>:null
    )
}

export default FavoriteTodoList;