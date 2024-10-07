import React from "react";
import img from "../../assets/images/user-icon.png";

const ChatHeader = () => {
  return (
    <div className="chat-top-header">
      <div className="c-header-top">
        <div className="c-info-wrapper">
          <div className="c-logo">
            <img src={img} alt="user-img" />
          </div>
          <div className="c-info">
            <h4>Kavita Dahlia</h4>
            <p className="status-online">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
