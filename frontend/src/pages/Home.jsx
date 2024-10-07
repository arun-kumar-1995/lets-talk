import React, { Fragment } from "react";
 

import HocSection from "../components/hoc/CommonSection";
import MainSection from "../layouts/MainLayout";
import ChannelHeader from "../components/common/ChannelHeader";
import MessageContainer from "../layouts/MessageLayout";
import ChatHeader from "../components/common/ChatHeader ";

const Home = () => {
  return (
    <Fragment>
      <MainSection>
        {/* <ChannelHeader /> */}
        <ChatHeader />
        <MessageContainer />
      </MainSection>
    </Fragment>
  );
};

export default HocSection(Home);
