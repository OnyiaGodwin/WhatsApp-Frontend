import { useEffect, useState } from "react";

import Pusher from "pusher-js";

import "./App.css";
import Chat from "./components/Chat/Chat";
import SideBar from "./components/SideBar/SideBar";
import axios from "./axios";
import { useStateValue } from "./Store/StateProvider";
import { actionTypes } from "./Store/reducer";
import Login from "./components/Login/Login";

function App() {
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      // console.log("This is response", response.data)

      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    // Check pusher.com for more info about pusher
    const pusher = new Pusher("6275b4b6c7f230697a54", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      // alert(JSON.stringify(newMessage));

      setMessages([...messages, newMessage]);
    });

    dispatch({
      type: actionTypes.SET_MESSAGE,
      message: messages,
    });

    // Clean up function
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, dispatch]);

  console.log("This is all the fetched messages", messages);

  return (
    <div className={!user ? "app__signIn" : "app"}>
      {!user ?  <Login /> :
      <div className="app__body">
        <div className="app__sidebar">
          {/* Sidebar Component */}
          <SideBar />
        </div>
        <div className="app__chat">
          {/* Chat Component */}
          <Chat messages={messages} />
        </div>
      </div>}
    </div>
  );
}

export default App;
