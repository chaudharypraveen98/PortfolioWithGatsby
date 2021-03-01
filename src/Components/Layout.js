import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";
import React from "react";
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <div className={styles.footerContainer}>Copyrights 2021 Binary Beast</div>
    </>
  );
};

export default Layout;
