import React from "react";
import { MdClose } from "react-icons/md";

const Notification = ({ onHandleNotificationChange }) => {
  return (
    <div className="notification-wrapper">
      <div className="notification-container">
        <div className="notification-control">
          <h4>My activity</h4>
          <button
            className="btn btn-close notification-close"
            onClick={onHandleNotificationChange}
          >
            <MdClose />
          </button>
        </div>

        <div className="notification">
          <div className="notification-content">notification</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
