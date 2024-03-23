import React from 'react'
import classes from "./SideBarChat.module.css";
import { Avatar } from '@mui/material';

function SideBarChat(props) {
  return (
    <div className={classes.sideBarChat}>
        <Avatar />
        <div className={classes.sideBarChat__info}>
            <h2>{props.name}</h2>
            <p>{props.message}</p>
        </div>
    </div>
  )
}

export default SideBarChat