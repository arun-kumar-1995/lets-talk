import React, { Fragment } from "react";
import "../styles/home.css";

import HocSection from "../components/HOC/CommonSection";
import MainSection from "../components/MainSection";
import ChannelTopHeader from "../components/ChannelTopHeader";
import MessageContainer from "../components/MessageContainer";

const Home = () => {
  return (
    <Fragment>
      <MainSection>
        <ChannelTopHeader />
        <MessageContainer />
      </MainSection>
    </Fragment>
  );
};

export default HocSection(Home);
