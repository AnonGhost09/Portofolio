import React from "react";
import { Whatsapp } from "../Icons";

function LeftHero() {
  return (
    <div className="w-full self-center lg:w-1/2 ">
      <h1 className="text-base font-semibold text-primary md:text-xl">
        Hallo Friends, saya
        <span className="mt-1 -ml-1 block text-4xl font-bold text-dark transition duration-1000 dark:text-white lg:text-5xl ">
          Pramudya Diva Alamsyah
        </span>
      </h1>
      <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">
        <span className="text-primary">Front-end</span> and
        <span className="text-dark transition duration-1000 dark:text-white ">
          {" "}
          Back-end
        </span>{" "}
        Developer
      </h2>
      <p className="mb-10 font-medium leading-relaxed text-slate-400">
        Sangat menyukai programming apalagi dibidang web programming. sangat
        <span className="font-bold text-dark transition duration-1000 dark:text-white">
          menyenangkan!
        </span>
      </p>

      <a
        href="https://wa.me/6281234567890"
        className="group flex w-56 justify-center rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:text-dark hover:opacity-80 hover:shadow-lg"
      >
        <p> Hubungi Saya</p>
        <span className="ml-3 text-white transition duration-300 ease-in-out group-hover:text-dark">
          <Whatsapp />
        </span>
      </a>
    </div>
  );
}

export default LeftHero;
