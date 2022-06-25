import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Theme = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Theme;
