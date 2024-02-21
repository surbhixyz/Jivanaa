import { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
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

const API_KEY = "AIzaSyDSmjRqSfIJRwn8NU7pXxyGLoItOUvZwXQ";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

function Chatwindow() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm GeminiAI! Ask me anything!",
      sentTime: "just now",
      sender: "GeminiAI",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const container = useRef(null);

  const Scroll = () => {
    const { offsetHeight, scrollHeight, scrollTop } = container.current;
    if (scrollHeight <= scrollTop + offsetHeight + 100) {
      container.current?.scrollTo(0, scrollHeight);
    }
  };

  const handleSend = async (message) => {
    if (!message) {
      return;
    }
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setIsTyping(true);

    try {
      const result = await model.generateContent(message);
      console.log("AI Response Result:", result); // Debugging
      const text = result.response.text();
      console.log("AI Response Text:", text); // Debugging

      const aiMessage = {
        message: text,
        direction: "incoming",
        sender: "geminiAI",
      };

      const newAIMessages = [...newMessages, aiMessage];
      setMessages(newAIMessages);

      setIsTyping(false);
      Scroll();
    } catch (error) {
      setIsTyping(false);
      console.error("generateContent error: ", error);
    }
  };

  return (
    <div className="chatwindow">
      <MainContainer className="MainContainer">
        <ChatContainer className="ChatContainer" ref={container}>
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