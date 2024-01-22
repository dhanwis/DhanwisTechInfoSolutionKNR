import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./image";


const config = {
  botName: "ChatBot AI",
  initialMessages: [createChatBotMessage('Hello')],
//   widgets: [
//     {
//       widgetName: "dogPicture",
//       widgetFunc: (props) => <DogPicture {...props} />,
//     },
//   ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
