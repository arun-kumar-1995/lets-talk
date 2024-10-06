import React from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import img from "../user-img-sq.jpeg";

const DirectMessage = ({ chatMsg = [] }) => {
  return (
    <section className="s-directmsg">
      <div className="directmsg-wrapper">
        <div className="directmsg-header d-flex">
          <p className="s-title">Direct message</p>
          <button className="btn btn-add">
            <MdAdd />
          </button>
        </div>
        <div className="directmsg-container">
          <ul className="directmsg-wrapper">
            {chatMsg &&
              chatMsg.map((chat, index) => (
                <li key={index} className="chat-msg">
                  <Link to={`chat/${index}?chatuser=${chat}`}>
                    <div className="user-icon">
                      <img src={img} alt="user-image" />
                    </div>
                    <p className="user-name">{chat}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DirectMessage;
