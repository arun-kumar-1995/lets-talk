import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const Capitalized = (string) => {
  const words = string.split(" ");
  return words.map((word) => word.charAt(0).toUpperCase());
};
const Rooms = ({ rooms }) => {
  return (
    <nav>
      <ul className="rooms">
        {rooms.map((room, index) => (
          <li key={index} className="room">
            <Link to={room}>{Capitalized(room)}</Link>
          </li>
        ))}
        <li>
          <div className="add-new-room">
            <button className="btn btn-newroom">+</button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Rooms;
