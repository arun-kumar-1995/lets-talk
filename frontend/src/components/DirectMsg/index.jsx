import React from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const DirectMessage = ({ chatMsg = [] }) => {
  return (
    <section className="s-directmsg">
      <div className="directmsg-wrapper">
        <div className="directmsg-header">
          <p>Direct message</p>
          <button className="btn btn-add">
            <MdAdd />
          </button>
        </div>
        <div className="directmsg-container">
          <ul className="directmsg-wrapper">
            {chatMsg &&
              chatMsg.map((chat, index) => (
                <li key={index}>
                  <Link to={chat}>{chat}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DirectMessage;
