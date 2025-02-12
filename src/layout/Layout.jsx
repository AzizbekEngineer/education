import Header from "./header/Header";
import Footer from "./footer/Footer";
import React from "react";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* <Header /> */}
      <main className="main-content">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
