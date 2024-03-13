import React from 'react'
import classes from "./SideBarChat.module.css";
import { Avatar } from '@mui/material';

function SideBarChat() {
  return (
    <div className={classes.sideBarChat}>
        <Avatar />
        <div className={classes.sideBarChat__info}>
            <h2>Chat name</h2>
            <p>This is the last message</p>
        </div>
    </div>
  )
}

export default SideBarChat