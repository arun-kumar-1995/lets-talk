import React, { Fragment } from "react";
import "../styles/home.css";

import Rooms from "../components/Rooms";
import Channels from "../components/Channels";
import DirectMessage from "../components/DirectMessage";
import Header from "../components/Header";

const rooms = ["shayri dunia", "walpaper", "robotics"];
const channels = ["design work", "task completion", "important notice"];
const chatsMsg = ["vinod", "kavita", "sonam"];

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="app-container">
        <section className="room-section">
          <Rooms rooms={rooms} />
        </section>
        <div className="middle-container">
          <Channels channels={channels} />
          <DirectMessage chatMsg={chatsMsg} />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
