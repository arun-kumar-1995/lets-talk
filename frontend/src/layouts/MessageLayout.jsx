import React from "react";
import ChatsContainer from "../components/common/ChatContainer";
import TextInput from "../components/common/TextInput";

const MessageLayout = ({ chats = [] }) => {
  return (
    <div className="message-container">
      <ChatsContainer chats={chats} />
      <TextInput />
    </div>
  );
};

export default MessageLayout;
