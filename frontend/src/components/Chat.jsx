import React from "react";
import img from "../user-img-sq.jpeg";

const Chat = ({ chat = {} }) => {
  return (
    <div className="chat">
      <div
        className="chat-user-img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="chat-details">
        <h4 className="text-name">
          Kenny
          <span class="text-time">5:45 PM</span>
        </h4>
        <p className="chat-text">
          we wish the sam for the next for the days...............
        </p>
      </div>
    </div>
  );
};

export default Chat;
