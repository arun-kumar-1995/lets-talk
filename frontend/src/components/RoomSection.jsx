import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import Capitalized from "../Helpers/Capitalized";
import ConvertHref from "../Helpers/ConvertHref";

const RoomSection = ({ rooms }) => {
  return (
    <section className="room-section">
      <aside>
        <nav>
          <ul className="rooms">
            {rooms.map((channel, index) => (
              <li key={index} className="room">
                <Link to={`/channel/id=${index}?name=${ConvertHref(channel)}`}>
                  {Capitalized(ConvertHref(channel))}
                </Link>
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
    </section>
  );
};

export default RoomSection;
