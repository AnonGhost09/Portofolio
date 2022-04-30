import React, { useEffect, useState } from "react";
import PositionContext from "./PositionContext";

const navData = [
  { nama: "Home", link: "#home", isActive: false },
  { nama: "Tentang Saya", link: "#tentang", isActive: false },
  { nama: "Portfolio", link: "#portfolio", isActive: false },
  { nama: "Clients", link: "#clients", isActive: false },
  { nama: "Skill", link: "#skill", isActive: false },
  { nama: "Testimoni", link: "#testimoni", isActive: false },
  { nama: "Contacts", link: "#contacts", isActive: false },
];
function PositionProvider({ children }) {
  const [navBar, setNavBar] = useState(navData);
  const [link, setLink] = useState("");

  const handleActive = bing => {
    setLink(bing);
  };

  useEffect(() => {
    setLink(window.location.hash);
    setNavBar(prevState => {
      return prevState.map(item => {
        return {
          ...item,
          isActive: item.link === link,
        };
      });
    });
  }, [link]);

  const positionValue = {
    navBar,
    handleActive,
  };
  return (
    <PositionContext.Provider value={positionValue}>
      {children}
    </PositionContext.Provider>
  );
}

export default PositionProvider;
