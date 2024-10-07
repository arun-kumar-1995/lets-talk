import React, { Fragment } from "react";
import Header from "../common/Header";
import SideLayout from "../../layouts/SideLayout";
import MiddleLayout from "../../layouts/MiddleLayout";

const rooms = ["shayri dunia", "walpaper", "robotics"];
const channels = ["design work", "task completion", "important notice"];
const chatsMsg = ["vinod", "kavita", "sonam"];

const HocSection = (Component) => {
  return (props) => (
    <Fragment>
      {/* header is common so it used */}
      <Header />
      <div
        className="app-container"
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        {/* add common section here */}
        <SideLayout rooms={rooms} />
        <MiddleLayout channels={channels} chatMsg={chatsMsg} />
        <Component {...props} />
      </div>
    </Fragment>
  );
};

export default HocSection;
