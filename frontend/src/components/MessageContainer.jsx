import React from "react";
import ChatsContainer from "./ChatContainer";
import TextInput from "./TextInput";

const MessageContainer = ({ chats = [] }) => {
  return (
    <div className="message-container">
      <ChatsContainer chats={chats} />
      <TextInput />
    </div>
  );
};
export default MessageContainer;
