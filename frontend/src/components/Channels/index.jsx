import React from "react";
import { MdAdd } from "react-icons/md";
import "./channel.css";
import { Link } from "react-router-dom";

const Channels = ({ channels = [] }) => {
  return (
    <section className="s-channels">
      <div className="channel-wrapper">
        <div className="channel-header">
          <p>Channels</p>
          <button className="btn btn-add">
            <MdAdd />
          </button>
        </div>
        <div className="channel-container">
          <ul className="channel-list-wrapper">
            {channels &&
              channels.map((channel, index) => (
                <li key={index} className="channel-list">
                  <Link to={channel} className="channel">
                    {channel}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Channels;
