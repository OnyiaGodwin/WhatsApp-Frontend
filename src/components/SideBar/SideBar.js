import React, { useEffect, useRef, useState } from "react";
import classes from "./SideBar.module.css";
import SideBarChat from "./SideBarChat";

import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useStateValue } from "../../Store/StateProvider";
import { actionTypes } from "../../Store/reducer";
import Community from "./Community";
import MoreList from "./MoreList";

export default function SideBar() {
  const [{ user }, dispatch] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const dropDownRef = useRef(null); //NB: This is used to create a reference to the dropdown container
  const [openCom, setOpenCom] = useState(false);

  // useEffect is used to add an event listener to the document for clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Checking if the click occured outside the dropdown container, if it does, the container will be closed
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    // Removing the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const listFunc = () => {
    setIsOpen(!isOpen);
  };

  const logOutFunc = () => {
    dispatch({
      type: actionTypes.SET_USER,
      user: "",
    });
  };

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const communityFunc = () => {
    setOpenCom(!openCom);
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__header}>
        <div className={classes.sidebar__headerLeft}>
          <Avatar src={user.photoURL} />
        </div>
        <div className={classes.sidebar__headerRight}>
          {/* Wrapping the DonutLargeIcon inside the IconButton makes it clickable */}
          <IconButton onClick={communityFunc} title="communities">
            <GroupsIcon />
          </IconButton>
          {openCom && <Community openCom={openCom} setOpenCom={setOpenCom} />}
          <IconButton title="Statues">
            <DonutLargeIcon />
          </IconButton>
          <IconButton title="Channels">
            <ChangeCircleIcon />
          </IconButton>
          <IconButton title="New chat">
            <CreateNewFolderIcon />
          </IconButton>
          <IconButton ref={dropDownRef} onClick={listFunc} title="Menu">
            <MoreVertIcon />
          </IconButton>
          <MoreList isOpen={isOpen} logOutFunc={logOutFunc} />
        </div>
      </div>
      <div className={classes.sidebar__search}>
        <div className={classes.sidebar__searchContainer}>
          {input.trim() === "" ? <SearchOutlinedIcon /> : <ArrowBackIcon />}
          <input
            value={input}
            type="text"
            onChange={inputHandler}
            placeholder="Search or start a new chat"
          />
        </div>
      </div>

      <div className={classes.sidebar__chats}>
        <SideBarChat name={"Frank"} message={"Hi Godwin, this is Frank"} />
        <SideBarChat name={"Maduabuchi"} message={"Hi Godwin"} />
        <SideBarChat name={"Buchi"} message={"I am travelling tomorrow"} />
        <SideBarChat name={"Abugod"} message={"This is message from Abugod"} />
        <SideBarChat name={"Godwin"} message={"This is message from Godwin"} />
        <SideBarChat name={"John"} message={"Are you at home"} />
        <SideBarChat
          name={"Ben"}
          message={"School is fine, just filled with stress"}
        />
        <SideBarChat
          name={"Chika"}
          message={"This is message from Madam Chika international"}
        />
      </div>
    </div>
  );
}
