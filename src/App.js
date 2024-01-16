import React, { useState, useEffect } from "react";
import "./App.css";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";
import { simulateBotResponse } from "./mockBotResponse";
import { scrollToBottom } from "./utils";

function App() {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Initial greeting when the application loads
    const initialGreeting = {
      text: "Hello! How can I help you?",
      type: "bot",
    };
    setChat([initialGreeting]);
  }, []);

  const sendMessage = (message) => {
    const userMessage = {
      text: message,
      type: "user",
    };
    setChat([...chat, userMessage]);
  
    simulateBotResponse(message, setChat); // Pass setChat here
  };
  
  

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <div className="App">
      <ChatWindow chat={chat} />
      <InputBox sendMessage={sendMessage} />
    </div>
  );
}

export default App;
