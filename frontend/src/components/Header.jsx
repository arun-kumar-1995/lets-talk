import React from "react";
import img from "../user-icon.png";
import "../styles/header.css";
import { FaBell } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Header = ({ notificationCount = 4 }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <div className="connect-logo">
              <h2>Lets Talk</h2>
            </div>
          </li>
          <li>
            <div className="notification-bell">
              <MdOutlineNotificationsNone className="bell-icon" />
              {notificationCount > 0 && (
                <span className="notification-count">{notificationCount}</span>
              )}
            </div>
          </li>
          <li>
            <div className="user-container">
              <div className="user-profile">
                <img src={img} alt="user" />
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
