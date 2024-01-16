import React from "react";
import ChatBubble from "./ChatBubble";

const ChatWindow = ({ chat }) => {
  return (
    <div className="chat-window">
      {chat.map((message, index) => (
        <ChatBubble
          key={index}
          message={message}
          align={message.type === "user" ? "right" : "left"} 
        />
      ))}
    </div>
  );
};

export default ChatWindow;
