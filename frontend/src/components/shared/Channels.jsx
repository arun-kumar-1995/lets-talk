import React from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import ConvertHref from "../../utils/ConvertHref";

const Channels = ({ channels = [] }) => {
  return (
    <section className="s-channels">
      <div className="channel-wrapper">
        <div className="channel-header d-flex">
          <p className="s-title">Channels</p>
          <button className="btn btn-add">
            <MdAdd />
          </button>
        </div>
        <div className="channel-container s-contain">
          <ul className="channel-list-wrapper">
            {channels &&
              channels.map((channel, index) => (
                <li key={index} className="channel-list">
                  <Link
                    to={`/channel/id=${index}?name=${ConvertHref(channel)}`}
                    className={`channel ${index === 0 ? "active-channel" : ""}`}
                  >
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
