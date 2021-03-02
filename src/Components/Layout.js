import Navbar from "../Components/Navbar";
import React from "react";
import "../styles/global.css";
import DefaultHelmet from './DefaultHelmet';

const Layout = ({ children }) => {
  return (
    <>
      <DefaultHelmet />
      <Navbar />
      <div className="container">
        <main className="main">{children}</main>
      </div>
      <div className="footerContainer">Copyrights 2021 @BinaryBeast</div>
    </>
  );
};

export default Layout;
