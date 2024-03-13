import React from "react";
import classes from "./AllChat.module.css";

export default function ChatReciver({ messages }) {
  console.log("This is message in received msg:", messages);

  // className={`${myCss.my_class} ${myCss.my_class2}`}

  return (
    <>
      <p
        className={
          messages.received
            ? `${classes.chat__messageReceiver}`
            : `${classes.chat__messageSender}`
        }
        key={messages._id}
      >
        <span
          className={
            messages.received
              ? `${classes.chat__nameReceiver}`
              : `${classes.chat__nameSender}`
          }
        >
          {messages.name}
        </span>
        {messages.message}

        <span className={classes.chat__timestamp}>
          {messages.timestamp}
        </span>
      </p>
    </>
  );
}
