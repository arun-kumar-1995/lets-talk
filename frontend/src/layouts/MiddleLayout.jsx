import React from "react";
import Channels from "../components/shared/Channels";
import DirectMessage from "../components/common/DirectMessage";

const MiddleLayout = ({ channels, chatMsg }) => {
  return (
    <div className="middle-container">
      <Channels channels={channels} />
      <DirectMessage chatMsg={chatMsg} />
    </div>
  );
};

export default MiddleLayout;
