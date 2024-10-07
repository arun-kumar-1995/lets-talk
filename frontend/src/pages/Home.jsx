import React, { Fragment } from "react";
import "../styles/home.css";

import HocSection from "../components/hoc/CommonSection";
import MainSection from "../layouts/MainLayout";
import ChannelTopHeader from "../components/common/ChannelHeader";
import MessageContainer from "../layouts/MessageLayout";
import ChatTopHeader from "../components/common/ChatHeader ";

const Home = () => {
  return (
    <Fragment>
      <MainSection>
        {/* <ChannelTopHeader /> */}
        <ChatTopHeader />
        <MessageContainer />
      </MainSection>
    </Fragment>
  );
};

export default HocSection(Home);
