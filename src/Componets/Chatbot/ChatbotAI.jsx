import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./config";
import ActionProvider from "./ActionProvide";
import MessageParser from "./MessageParser";
import DogPicture from "./image";

export default function ChatbotAI() {


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
