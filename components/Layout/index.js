import React from "react";

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

import { Main } from "./style";

export const Layout = ({ children }) => {
  return (
    <>
      <Main>
        <Navbar />
        {children}
        <Footer />
      </Main>
    </>
  );
};
