import React from "react";
import "../styles/mainlayout.css";

const MainLayout = ({ children }) => {
  return <div className="s-section section-long">{children}</div>;
};

export default MainLayout;
