import React from "react";

const PositionContext = React.createContext({
  position: {},
  offset: {
    home: null,
    tentang: null,
    portfolio: null,
    clients: null,
    skill: null,
    contacts: null,
  },
  replaceOffset: value => {},
});

export default PositionContext;
