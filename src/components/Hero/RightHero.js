import React from "react";
import Blob from "../Blob";
import pramudya from "../..//assets/images/pramudya.png";

function RightHero() {
  return (
    <div className="w-full self-end px-4 lg:w-1/2 lg:top-10">
      <div className="mt-10 relative lg:mt-0 lg:right-0">
        <img
          src={pramudya}
          alt="orang ganteng pramudya diva alamsyah"
          className="w-auto mx-auto -translate-y-28 rounded-lg"
        />
        <span className="absolute top-14 -z-10 left-1/3 -translate-x-1/4 md:scale-125">
          <Blob width={400} height={400} />
        </span>
      </div>
    </div>
  );
}

export default RightHero;
