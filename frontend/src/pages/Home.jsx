import React, { Fragment } from "react";
import "../styles/home.css";

import HocSection from "../components/HOC/CommonSection";
import ChannelSection from "../components/ChannelSection";

const Home = () => {
  return (
    <Fragment>
      <div className="app-container">
        <ChannelSection />
      </div>
    </Fragment>
  );
};

export default HocSection(Home);
