import React from "react";
import Channels from "./Channels";
import DirectMessage from "./DirectMessage";

const MiddleSection = ({ channels, chatMsg }) => {
  return (
    <div className="middle-container">
      <Channels channels={channels} />
      <DirectMessage chatMsg={chatMsg} />
    </div>
  );
};

export default MiddleSection;
