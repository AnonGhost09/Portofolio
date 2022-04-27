import React, { useCallback, useState } from "react";
import PositionContext from "./PositionContext";

const initialOffset = {
  home: null,
  tentang: null,
  portfolio: null,
  clients: null,
  skill: null,
  contacts: null,
};

function PositionProvider({ children }) {
  const [position] = useState({
    link: window.location.hash || false,
  });
  const [offset, setOffset] = useState(initialOffset);

  const replaceOffset = useCallback(value => {
    setOffset(prevState => {
      return { ...prevState, ...value };
    });
  }, []);

  const positionValue = {
    position,
    offset,
    replaceOffset,
  };
  return (
    <PositionContext.Provider value={positionValue}>
      {children}
    </PositionContext.Provider>
  );
}

export default PositionProvider;
