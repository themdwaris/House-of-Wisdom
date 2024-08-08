import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import NewsLetter from "./components/NewsLetter/NewsLetter";

const Layout = () => {
  return (
    <>
      
        <Header />
        <Outlet />
        <NewsLetter/>
        <Footer />
     
    </>
  );
};

export default Layout;
