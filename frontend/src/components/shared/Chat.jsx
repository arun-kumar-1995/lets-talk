import React from "react";
import img from "../../assets/images/user-img-sq.jpeg";

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
          <span className="text-time">5:45 PM</span>
        </h4>
        <p className="chat-text">
          we wish the sam for the next for the days...............
        </p>
      </div>
    </div>
  );
};

export default Chat;
