export const simulateBotResponse = (userMessage, setChat) => { 
  const botResponses = {
    hello: "Hello!",
    hi: "Hi there!",
    hey: "Hey!",
    "who are you": "I'm a chatbot. How can I assist you?",
  };

  const lowerCaseMessage = userMessage.toLowerCase();
  let botMessage = botResponses[lowerCaseMessage];

  if (!botMessage) {
    botMessage = "I'm not sure how to respond to that. How can I assist you?";
  }

  setTimeout(() => {
    const botResponse = {
      text: botMessage,
      type: "bot",
    };
    setChat((prevChat) => [...prevChat, botResponse]);
  }, 1000);
};
