import React from "react";
import { Blob } from "../Icons";
import pramudya from "../..//assets/images/pramudya.png";

function RightHero() {
  return (
    <div className="w-full self-end lg:w-1/2">
      <div className="relative mt-10 lg:right-0 lg:mt-0">
        <img
          src={pramudya}
          alt="orang ganteng pramudya diva alamsyah"
          className="relative z-10 mx-auto w-full -translate-y-28 rounded-lg lg:ml-auto"
        />
        <span className="absolute top-14 left-1/3 -translate-x-1/4 md:scale-125">
          <Blob width={400} height={400} />
        </span>
      </div>
    </div>
  );
}

export default RightHero;
