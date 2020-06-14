import React from 'react';
import classes from './NotificationBar.module.css';

const NotificationBar = (props)=>{

    let assignedClasses = [classes.NotificationBar,classes.Hide];
    console.log('inside the NotificationBar',props.show)
    if(props.show){
        console.log('insid the condition',props.show);
        assignedClasses=[classes.NotificationBar,classes.Show];
    }
    return(
        <div className={assignedClasses.join(" ")}>
            <div className={classes.heading}>Notifications</div>
        </div>
    )
}


export default NotificationBar;