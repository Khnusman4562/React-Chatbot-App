import React from "react";

const ChatBubble = ({ message, align }) => {
  const bubbleClass = message.type === "user" ? "user" : "bot";
  const alignClass = `align-${align}`; 

  return (
    <div className={`chat-bubble ${bubbleClass} ${alignClass}`}>
      {message.text}
    </div>
  );
};

export default ChatBubble;
