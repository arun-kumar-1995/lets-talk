import React, { useState } from "react";
import img from "../../../assets/images/user-icon.png";
import "./header.css";

import Notification from "../Notification";
import ProfileController from "../ProfileControl";

import { MdOutlineNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ notificationCount = 4 }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleNotificationChange = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  const handleProfileChange = () => {
    console.log(isProfileOpen);
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <div className="connect-logo">
              <Link to="/">Lets Talk</Link>
            </div>
          </li>
          <li>
            <div
              className="notification-bell"
              onClick={handleNotificationChange}
            >
              <MdOutlineNotificationsNone className="bell-icon" />
              {notificationCount > 0 && (
                <span className="notification-count">{notificationCount}</span>
              )}
            </div>

            {isNotificationOpen && (
              <Notification
                state={isNotificationOpen}
                onHandleNotificationChange={handleNotificationChange}
              />
            )}
          </li>
          <li>
            <div className="user-container" onClick={handleProfileChange}>
              <div className="user-profile">
                <img src={img} alt="user" />
              </div>
            </div>

            {isProfileOpen && (
              <ProfileController onHandleProfileChange={handleProfileChange} />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
