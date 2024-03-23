import React, { useState } from "react";
import classes from "./Community.module.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NewCommunity from "./NewCommunity";

export default function Community({ openCom, setOpenCom }) {
  const [newIsOpen, setNewIsOpen] = useState(false);

  console.log("The community just got clicked now");


  return (
    <div className={!openCom ? `${classes.body}` : `${classes.body__open}`}>
      {/* <div className={classes.body}> */}
      <div className={classes.body__header}>
        <span>
          <ArrowBackIcon
            className={classes.body__header__backArrow}
            onClick={() => setOpenCom(!openCom)}
          />
          <h1 className={classes.body__header__text}>Communities</h1>
        </span>
      </div>

      <div className={classes.body__body}>
        <img src="./whatsappcommunity.png" alt="logo" />
        <h2>Stay connected with a community</h2>
        <p>
          Communities bring members together in topic-based groups, and make it
          easy to get admin announcements. Any community you're added to will
          appear here.
        </p>
        <span className={classes.body__body__seeCommunity}>
          <a
            href="https://faq.whatsapp.com/231869526393268?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            See example communities
          </a>
          <NavigateNextIcon />
        </span>
        <button onClick={() => setNewIsOpen(!newIsOpen)}>Start your community</button>
        {newIsOpen && (
          <NewCommunity newIsOpen={newIsOpen} setNewIsOpen={setNewIsOpen} />
        )}
      </div>
    </div>
  );
}
