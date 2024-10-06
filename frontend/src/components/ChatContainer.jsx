import React from "react";
import userImg from "../user-icon.png";
import Chat from "./Chat";

const ChatsContainer = ({ chats = [] }) => {
  return (
    <div class="chats-container">
      {/* {chats.map((chat) => ( */}
      <Chat />
      <Chat />
      {/* ))} */}
    </div>
  );
};

export default ChatsContainer;
