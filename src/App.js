import { useEffect, useState } from "react";

import Pusher from "pusher-js";

import "./App.css";
import Chat from "./components/Chat/Chat";
import SideBar from "./components/SideBar/SideBar";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

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

    // Clean up function
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log("This is all the fetched messages", messages);

  return (
    <div className="app">
      <div className="app__body">
        <div className="app__sidebar">
          {/* Sidebar Component */}
          <SideBar />
        </div>
        <div className="app__chat">
          {/* Chat Component */}
          <Chat messages={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;
