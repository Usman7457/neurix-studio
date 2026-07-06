import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
