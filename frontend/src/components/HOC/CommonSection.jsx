import React, { Fragment } from "react";
import Header from "../Header";
import RoomSection from "../RoomSection";
import MiddleSection from "../MiddleSection";

const rooms = ["shayri dunia", "walpaper", "robotics"];
const channels = ["design work", "task completion", "important notice"];
const chatsMsg = ["vinod", "kavita", "sonam"];

const HocSection = (Component) => {
  return (props) => (
    <Fragment>
      {/* header is common so it used */}
      <Header />
      <div className="app-container">
        {/* add common section here */}
        <RoomSection rooms={rooms} />
        <MiddleSection channels={channels} chatMsg={chatsMsg} />
        <Component {...props} />
      </div>
    </Fragment>
  );
};

export default HocSection;
