import React from "react";
import Chat from "./Chat";

const ChatsContainer = ({ chats = [] }) => {
  return (
    <div className="chats-container">
      {/* {chats.map((chat) => ( */}
      <Chat />
      <Chat />
      {/* ))} */}
    </div>
  );
};

export default ChatsContainer;
