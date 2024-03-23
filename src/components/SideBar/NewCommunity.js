import React, { useState } from "react";
import classes from "./NewCommunity.module.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CreateCommunity from "./CreateCommunity";

export default function NewCommunity({ newIsOpen, setNewIsOpen }) {
  const [openCreate, setOpenCreate] = useState(false);

  return (
    <>
      <div className={!newIsOpen ? `${classes.body}` : `${classes.body__open}`}>
        {/* <div className={classes.body}> */}
        <div className={classes.body__header}>
          <span>
            <ArrowBackIcon
              className={classes.body__header__backArrow}
              onClick={() => setNewIsOpen(!newIsOpen)}
            />
            <h1 className={classes.body__header__text}>New Community</h1>
          </span>
        </div>

        <div className={classes.body__body}>
          <img src="./new_community.png" alt="logo" />
          <h2>Creare a new community</h2>
          <p>
            Bring together a neighborhood, school or more. Create topic-based
            groups for members, and easily send them admin announcements.
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
          <button className={classes.body__body__createButton} onClick={() => setOpenCreate(!openCreate)}>
            <ArrowForwardIcon
              className={classes.body__body__createButtonForwardArrow}
            />
          </button>
        </div>
      </div>
      {openCreate && <CreateCommunity setOpenCreate={setOpenCreate} openCreate={openCreate} />}
    </>
  );
}
