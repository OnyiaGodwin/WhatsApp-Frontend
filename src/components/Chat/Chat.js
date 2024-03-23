import React, { useState } from "react";
import classes from "./Chat.module.css";
import axios from "../../axios";

import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";

import AllChat from "./AllChat";
import { useStateValue } from "../../Store/StateProvider";

export default function Chat({ messages }) {
  const [{user}] = useStateValue();

  const [input, setInput] = useState("");

  // console.log("Messages Received:", messages);

  const timestamp = new Date().toUTCString();
  const shortTimestamp = timestamp.slice(17, 22);

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    // console.log(`inputed message: ${input}, sent`);

    await axios.post("messages/new", {
      message: input,
      name: "Godwin",
      timestamp: shortTimestamp,
      received: false,
    });

    setInput("");
  };

  const inputChangeHandler = (event) => {
    // Get input value from event
    setInput(event.target.value);
  };

  // console.log("This is the input ==>", input)

  return (
    <div className={classes.chat}>
      <div className={classes.chat__header}>
        <Avatar src={user.received ? user.photoURL : ""} />
        <div className={classes.chat__headerInfo}>
          <h3 className={classes.chat__roomName}>Room name</h3>
          <p className={classes.chat__roomLastSeen}>Last seen at...</p>
        </div>
        <div className={classes.chat__headerRight}>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className={classes.chat__body}>
        {messages.map((msg, index) => {
          // console.log("====>", msg)
          return <AllChat key={index} messages={msg} />;
        })}
      </div>
      <div className={classes.chat__footer}>
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <form>
          <input
            value={input}
            placeholder="Type a message"
            type="text"
            onChange={inputChangeHandler}
          />
          {input.trim() && (
            <button type="submit" onClick={sendMessageHandler}>
              <IconButton>
                <SendIcon />
              </IconButton>
            </button>
          )}
        </form>
        {!input.trim() && (
          <IconButton>
            <MicIcon className={classes.chat__footerMic} />
          </IconButton>
        )}
      </div>
    </div>
  );
}
