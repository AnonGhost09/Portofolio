import React from "react";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

function index() {
  return (
    <section id="home" className="pt-32">
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
