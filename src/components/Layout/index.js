import React from "react";
import Nav from "../Nav";

function index({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default index;
