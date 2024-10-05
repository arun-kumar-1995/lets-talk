import React from "react";
import Rooms from "../components/Rooms";
import Channels from "../components/Channels";
import DirectMessage from "../components/DirectMsg";

const rooms = ["shayri dunia", "walpaper", "robotics"];
const channels = ["design work", "task completion", "important notice"];
const chatsMsg = ["vinod", "kavita", "sonam"];
const Home = () => {
  return (
    <div className="app-container">
      <section className="room-section">
        <Rooms rooms={rooms} />
      </section>
      <div className="middle-container">
        <div className="connect-logo">
          <h1>Lets Talk</h1>
        </div>
        <Channels channels={channels} />
        <DirectMessage chatMsg={chatsMsg} />
      </div>
    </div>
  );
};

export default Home;
