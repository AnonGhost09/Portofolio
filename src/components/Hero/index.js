import React from "react";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

function index() {
  return (
    <section id="home" className="pt-5 h-screen">
      <div className="container">
        <div className="flex flex-wrap">
          <LeftHero />
          <RightHero />
        </div>
      </div>
    </section>
  );
}

export default index;
