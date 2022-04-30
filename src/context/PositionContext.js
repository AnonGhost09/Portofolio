import React from "react";

const PositionContext = React.createContext({
  navBar: {
    nama: "",
    link: "",
    isActive: false,
  },
  isActive: false,
  handleActive: () => {},
});

export default PositionContext;
