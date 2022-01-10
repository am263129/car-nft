import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";
import MintPage from "./mint";
import CarPage from "./car";

const Pages = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MintPage />} />
          <Route path="/car" element={<CarPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);