import React from "react";
import Nav from "../Nav";

function index({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}

export default index;
