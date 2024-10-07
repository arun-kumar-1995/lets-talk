import React, { Fragment } from "react";
import "../styles/home.css";

import HocSection from "../components/HOC/CommonSection";
import MainSection from "../components/MainSection";

const Home = () => {
  return (
    <Fragment>
      <MainSection />
    </Fragment>
  );
};

export default HocSection(Home);
