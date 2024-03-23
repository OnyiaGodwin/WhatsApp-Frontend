import React from "react";
import classes from "./MoreList.module.css";

export default function MoreList({ isOpen, logOutFunc }) {
  return (
    <div className={classes.sidebar__MoreList}>
      {isOpen && (
        <ul>
          <li>New group</li>
          <li>New Community</li>
          <li>Starred messages</li>
          <li>Settings</li>
          <li onClick={logOutFunc}>Log out</li>
          <li>
            <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer">
              Get WhatsApp for Windows
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
