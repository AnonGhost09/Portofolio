import React from "react";
import pramudya from "./assets/images/pramudya.png";
import Blob from "./components/Blob";

function App() {
  return (
    <section id="home" className="pt-32">
      <div className="container ">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2 ">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hallo Friends, saya{" "}
              <span class="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                Pramudya Diva Alamsyah
              </span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
              <span className="text-teal-400">Front-end</span> and{" "}
              <span className="text-dark">Back-end</span> Developer
            </h2>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed">
              Sangat menyukai programming apalagi dibidang web programming.
              sangat <span className="text-dark font-bold">menyenangkan!</span>
            </p>

            <button className="text-base bg-primary font-semibold text-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
              Hubungi Saya
            </button>
          </div>

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
        </div>
      </div>
    </section>
  );
}

export default App;
