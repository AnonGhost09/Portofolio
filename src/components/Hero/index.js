import React from "react";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

function Index() {
  return (
    <section className="min-h-screen pt-5 transition duration-1000 dark:bg-dark">
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
