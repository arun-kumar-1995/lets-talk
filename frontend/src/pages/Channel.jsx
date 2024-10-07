import React, { Fragment } from "react";
import HocSection from "../components/hoc/CommonSection";
import MainSection from "../layouts/MainLayout";
import ChannelTopHeader from "../components/common/ChannelHeader";
import MessageContainer from "../layouts/MessageLayout";
const Channel = () => {
  return (
    <Fragment>
      <MainSection>
        <ChannelTopHeader />
        <MessageContainer />
      </MainSection>
    </Fragment>
  );
};

export default HocSection(Channel);
