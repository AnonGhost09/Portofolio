import React from "react";
import { Whatsapp } from "../Icons";

function LeftHero() {
  return (
    <div className="w-full self-center lg:w-1/2 ">
      <h1 className="text-base font-semibold text-primary md:text-xl">
        Hallo Friends, saya{" "}
        <span class="block font-bold text-dark text-4xl mt-1 lg:text-5xl -ml-1">
          Pramudya Diva Alamsyah
        </span>
      </h1>
      <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
        <span className="text-primary">Front-end</span> and{" "}
        <span className="text-dark">Back-end</span> Developer
      </h2>
      <p className="font-medium text-slate-400 mb-10 leading-relaxed">
        Sangat menyukai programming apalagi dibidang web programming. sangat{" "}
        <span className="text-dark font-bold">menyenangkan!</span>
      </p>

      <button className="text-base flex bg-primary font-semibold text-white py-3 px-8 rounded-full hover:shadow-lg hover:text-dark hover:opacity-80 transition duration-300 ease-in-out group">
        Hubungi Saya
        <span className="ml-3 text-white group-hover:text-dark transition duration-300 ease-in-out">
          <Whatsapp />
        </span>
      </button>
    </div>
  );
}

export default LeftHero;
