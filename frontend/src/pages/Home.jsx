import React, { Fragment } from "react";
 

import HocSection from "../components/hoc/CommonSection";
import MainLayout from "../layouts/MainLayout";
import ChannelHeader from "../components/common/ChannelHeader";
import MessageContainer from "../layouts/MessageLayout";
import ChatHeader from "../components/common/ChatHeader ";

const Home = () => {
  return (
    <Fragment>
      <MainLayout>
        {/* <ChannelHeader /> */}
        <ChatHeader />
        <MessageContainer />
      </MainLayout>
    </Fragment>
  );
};

export default HocSection(Home);
