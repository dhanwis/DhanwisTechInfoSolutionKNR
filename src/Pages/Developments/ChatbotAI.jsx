import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "../../Componets/Chatbot/config";
import ActionProvider from "../../Componets/Chatbot/ActionProvide";
import MessageParser from "../../Componets/Chatbot/MessageParser";

export default function ChatbotAI() {
  // const config = {
  //   botName: "ChatBot AI",
  //   lang: "en",
  //   customStyles: {
  //     botMessageBox: {
  //       backgroundColor: "yellow",
  //     },
  //     chatButton: {
  //       backgroundColor: "red",
  //     },
  //   },
  //   customComponents: {},
  //   initialMessages: [
  //     {
  //       id: "1",
  //       message: "Hi! I am a chatbot. How can I help you today?",
  //       trigger: "2",
  //     },
  //     {
  //       id: "2",
  //       options: [
  //         { value: "react", label: "React", trigger: "3" },
  //         { value: "javascript", label: "JavaScript", trigger: "4" },
  //       ],
  //     },

  //     {
  //       id: "3",
  //       message: "React is a JavaScript library for building user interfaces.",
  //       end: true,
  //     },
  //     {
  //       id: "4",
  //       message: "JavaScript is a programming language.",
  //       end: true,
  //     },
  //   ],
  // };

  return (
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
  );
}

//config = { config };
//messageParser = { MessageParser };
//actionProvider = { ActionProvider };
