import React, { useState } from "react";
import classes from "./CreateCommunity.module.css";

// import EmojiPicker from "emoji-picker-react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import GroupsIcon from "@mui/icons-material/Groups";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

export default function CreateCommunity({ openCreate, setOpenCreate }) {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className={!openCreate ? `${classes.body}` : `${classes.body__open}`}>
      {/* <div className={classes.body}> */}
      <div className={classes.body__header}>
        <span>
          <ArrowBackIcon
            className={classes.body__header__backArrow}
            onClick={() => setOpenCreate(!openCreate)}
          />
          <h1 className={classes.body__header__text}>New Community</h1>
          <IconButton
            href="https://faq.whatsapp.com/231869526393268?lang=en"
            target="_blank"
          >
            <HelpOutlineIcon className={classes.body__header__helpOutline} />
          </IconButton>
        </span>
      </div>

      <div className={classes.body__body}>
        <div className={classes.body__body__differentCommunity}>
          <span>
            <a
              href="https://faq.whatsapp.com/231869526393268?lang=en"
              rel="noreferrer"
              target="_blank"
            >
              <TipsAndUpdatesIcon className={classes.body__body__tipIcon} />
            </a>
            <p className={classes.body__body__differentCommunityText}>
              <a
                href="https://faq.whatsapp.com/231869526393268?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                See examples
              </a>
              of different communities
            </p>
          </span>
        </div>
        <div className={classes.body__body__communityImageHolder}>
          <span className={classes.body__body__communityImageInnerHolder}>
            <div className={classes.body__body__communityCameraIconHolder}>
              <IconButton>
                <CameraAltIcon
                  style={{ fontSize: 30 }}
                  className={classes.body__body__communityCameraIcon}
                />
              </IconButton>
            </div>
            <div className={classes.body__body__communityIconText}>
              Add community Icon
            </div>
            <IconButton className={classes.body__body__communityIconButton}>
              <GroupsIcon
                style={{ fontSize: 150 }}
                className={classes.body__body__communityIcon}
              />
            </IconButton>
          </span>
        </div>

        <IconButton className={classes.body__body__refreshIconHolder}>
          <RefreshIcon className={classes.body__body__refreshIcon} />
        </IconButton>

        <div
          className={
            !input
              ? `${classes.body__body__textInputHolder}`
              : `${classes.body__body__textInputHolder__input}`
          }
        >
          {input && (
            <span className={classes.body__body__communityName}>
              Community name
            </span>
          )}
          <div className={classes.body__body__textInputInnerHolder}>
            <span>
              <input
                type="text"
                placeholder="Community name"
                className={classes.body__body__textInput}
                onChange={inputHandler}
              />
              <IconButton className={classes.body__body__textInputEmojiButton}>
                <SentimentVerySatisfiedIcon
                  className={classes.body__body__textInputEmoji}
                />
              </IconButton>
            </span>
          </div>
        </div>
        <div className={classes.body__body__description}>
          <span className={classes.body__body__description__text}>
            Community description
          </span>
          <span className={classes.body__body__descriptionMessageContainer}>
            <p className={classes.body__body__descriptionMessage}>
              Hi everyone! This community is for members to chat in topic-based
              groups and get important announcements.
            </p>
            <IconButton className={classes.body__body__descriptionMessageEmoji}>
              <SentimentVerySatisfiedIcon />
            </IconButton>
          </span>
        </div>
      </div>
    </div>
  );
}
