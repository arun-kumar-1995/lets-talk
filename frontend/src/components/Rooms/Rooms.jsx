import React from "react";
const rooms = ["Shayri", "Walpaper", "Robotics"];
const Rooms = () => {
  return (
    <div className="room-container">
      {rooms.map((index, room) => (
        <div key={index} className="room">
          {room.charAt(0).toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Rooms;
