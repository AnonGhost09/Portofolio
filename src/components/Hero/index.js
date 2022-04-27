import React, { useContext, useEffect, useRef } from "react";
import PositionContext from "../../context/PositionContext";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

function Index() {
  const homeRef = useRef();
  const context = useContext(PositionContext);
  const { position, replaceOffset } = context;
  useEffect(() => {
    replaceOffset({ home: homeRef.current.offsetTop });
  }, [position.link, replaceOffset]);

  return (
    <section id="home" className="pt-5 min-h-screen" ref={homeRef}>
      <div className="container">
        <div className="flex flex-wrap">
          <LeftHero />
          <RightHero />
        </div>
      </div>
    </section>
  );
}

export default Index;
