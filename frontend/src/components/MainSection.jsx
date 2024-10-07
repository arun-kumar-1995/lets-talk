import React from "react";
import channelImg from "../designwork.png";
import userImg from "../user-icon.png";
import { MdMoreVert } from "react-icons/md";
import ChatsContainer from "./ChatContainer";
import TextInput from "./TextInput";

const chats = [];

const MainSection = () => {
  return (
    <div className="s-section section-long">
      <div className="channel-header-top">
        <div className="c-header-top">
          <div className="c-info-wrapper">
            <div
              className="c-logo"
              style={{ backgroundImage: `url(${channelImg})` }}
            ></div>
            <div className="c-info">
              <h4># Design Work</h4>
              <p>This is new channel</p>
            </div>
          </div>
          <div className="c-members">
            <div
              className="c-member member-icon"
              style={{ backgroundImage: `url(${userImg})` }}
            ></div>
            <div
              className="c-member member-icon"
              style={{ backgroundImage: `url(${userImg})` }}
            ></div>
            <div className="c-totalmembers">
              <span>+3</span>
            </div>
          </div>
          <button className="add-cmembers">Add</button>
          <button className="c-more-info">
            <MdMoreVert />
          </button>
        </div>
      </div>

      <div className="message-container">
        <ChatsContainer chats={chats} />
        <TextInput />
      </div>
    </div>
  );
};

export default MainSection;
