import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Header from "./header";


const Layout = ({
  children,
  title,
  selectLang,
  openLang,
  page = "home"
}) => {

  return (
    <div className={`flex flex-col items-center min-h-screen justify-between relative overflow-x-hidden text-app-black-100 max-w-container mx-auto`}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="flex-1 w-full mt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
