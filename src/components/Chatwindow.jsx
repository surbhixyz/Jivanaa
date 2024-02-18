import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

import "./chatwindow.css";

function Chatwindow() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm GeminiAI! Ask me anything!",
      sentTime: "just now",
      sender: "GeminiAI",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
  };

  return (
    <div className="chatwindow">
      <MainContainer className="MainContainer">
        <ChatContainer className="ChatContainer">
          <MessageList
            className="MessageList"
            scrollBehavior="smooth"
            typingIndicator={
              isTyping ? <TypingIndicator content="GeminiAI is typing" /> : null
            }
          >
            {messages.map((message, i) => {
              console.log(message);
              return <Message key={i} model={message} />;
            })}
          </MessageList>
          <MessageInput
            className="MessageInput"
            placeholder="Type message here"
            onSend={handleSend}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default Chatwindow;
