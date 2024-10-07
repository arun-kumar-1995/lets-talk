import React from "react";
import Rooms from "../components/RoomSection";
const rooms = ["Shayri", "Walpaper", "Robotics"];

const Chats = () => {
  <div className="app-container">
    <h1>Chat page</h1>
    <section className="room-section">
      <Rooms rooms={rooms} />
    </section>
  </div>;
};

export default Chats;
