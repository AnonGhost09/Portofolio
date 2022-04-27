import React from "react";
import Nav from "../Nav";

function index({ children }) {
  return (
    <div className="">
      <Nav />
      {children}
    </div>
  );
}

export default index;
