import React, { useState } from "react";
import classes from "./SideBar.module.css";
import SideBarChat from "./SideBarChat";

import { Avatar, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

export default function SideBar() {
  const [show, setShow] = useState(false);

  const listFunc = () => {
    setShow(!show);
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__header}>
        <div className={classes.sidebar__headerLeft}>
          <Avatar src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w300/2023/10/free-images.jpg" />
        </div>
        <div className={classes.sidebar__headerRight}>
          {/* Wrapping the DonutLargeIcon inside the IconButton makes it clickable */}
          <IconButton>
            <GroupsIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChangeCircleIcon />
          </IconButton>
          <IconButton>
            <CreateNewFolderIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton onClick={listFunc}>
            <MoreVertIcon />
          </IconButton>
          <div className={classes.sidebar__MoreList}>
          {show && (
            <ul>
              <li>New group</li>
              <li>New Community</li>
              <li>Starred messages</li>
              <li>Settings</li>
              <li>Log out</li>
              <li>Get WhatsApp for Windows</li>
            </ul>
          )}
        </div>
        </div>
      </div>
      <div className={classes.sidebar__search}>
        <div className={classes.sidebar__searchContainer}>
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>

      <div className={classes.sidebar__chats}>
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  );
}
