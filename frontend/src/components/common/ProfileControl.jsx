import React from "react";

import { MdOutlineLogout } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { MdClose } from "react-icons/md";

const ProfileController = ({ onHandleProfileChange }) => {
  return (
    <div className="profile-control-wrapper">
      <div className="profile-container">
        <div className="control-header">
          <h4>Profile</h4>
          <button
            className="btn btn-profile-close"
            onClick={onHandleProfileChange}
          >
            <MdClose />
          </button>
        </div>

        <div className="profile-control">
          <button className="btn btn-logout">
            <MdOutlineLogout />
            <span>Logout</span>
          </button>

          <button className="btn btn-setting">
            <LuSettings />
            <span>Setting</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileController;
