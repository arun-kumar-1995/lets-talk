import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

const Capitalized = (string) => {
  const words = string.split(" ");
  return words.map((word) => word.charAt(0).toUpperCase());
};
const Rooms = ({ rooms }) => {
  return (
    <aside>
      <nav>
        <ul className="rooms">
          {rooms.map((room, index) => (
            <li key={index} className="room">
              <Link to={room}>{Capitalized(room)}</Link>
            </li>
          ))}
          <li>
            <button className="btn btn-newroom">
              <MdAdd />
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Rooms;
