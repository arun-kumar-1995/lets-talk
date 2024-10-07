import React, { Fragment } from "react";

import HocSection from "../components/hoc/CommonSection";
import MainSection from "../layouts/MainLayout";
import MessageContainer from "../layouts/MessageLayout";
import ChatTopHeader from "../components/common/ChatHeader ";

const Chat = () => {
  return (
    <Fragment>
      <MainSection>
        <ChatTopHeader />
        <MessageContainer />
      </MainSection>
    </Fragment>
  );
};

export default HocSection(Chat);
