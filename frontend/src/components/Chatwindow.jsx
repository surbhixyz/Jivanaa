import { useState, useEffect, useRef } from "react";
//import { GoogleGenerativeAI } from "@google/generative-ai";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { Link } from "react-router-dom";
import "./chatwindow.css";
import axios from "axios";

function Chatwindow() {
  const [cursor, setCursor] = useState("pointer");
  const [messages, setMessages] = useState([
    {
      message:
        "Hello! 👋 I'm Jiva, your friendly guide to the world of sexual and reproductive health.  I'm here to provide information, answer your questions, and offer support in a safe and inclusive space. What can I help you with today?",
      sentTime: "just now",
      sender: "GeminiAI",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  // Function to scroll to the bottom of the chat container
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Auto-scroll to the bottom of the chat container when new messages are added
    scrollToBottom();
  }, [messages]);

  const handleSend = async (message) => {
    if (!message) {
      return;
    }
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };
    setMessages((messages) => [...messages, newMessage]); // Update messages state correctly
    setIsTyping(true);

    try {
      const result = await axios.post("http://localhost:5000/generate", {
        user_input: message,
      });
      console.log("AI Response Result:", result); // Debugging
      const text = result.data.generated_text;
      console.log("AI Response Text:", text); // Debugging

      const aiMessage = {
        message: text,
        direction: "incoming",
        sender: "geminiAI",
      };

      setMessages((messages) => [...messages, aiMessage]); // Update messages state correctly
      setIsTyping(false);
    } catch (error) {
      setIsTyping(false);
      console.error("generateContent error: ", error);
    }
  };

  return (
    <div className="chatwindow">
      <MainContainer className="MainContainer">
        <ChatContainer className="ChatContainer">
          <MessageList
            className="MessageList"
            ref={chatContainerRef}
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
      <div className="btn-chatbot-container">
        <Link to={"/ask-expert"}>
          <button className="btn-chatbot" style={{ cursor: cursor }}>
            ASK EXPERT
          </button>
        </Link>

        <Link to={"/stay-tuned"}>
          <button className="btn-chatbot" style={{ cursor: cursor }}>
            CONSULT DOCTOR
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Chatwindow;
