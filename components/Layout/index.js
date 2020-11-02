import React from "react";

import { Navbar } from "../Navbar";

import { Main } from "./style";

export const Layout = ({ children }) => {
  return (
    <>
      <Main>
        <Navbar />
        {children}
      </Main>
    </>
  );
};
