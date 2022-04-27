import React, { useContext, useEffect, useRef } from "react";
import PositionContext from "../../context/PositionContext";

function Index() {
  const skillRef = useRef();
  const context = useContext(PositionContext);
  const { position, replaceOffset } = context;

  useEffect(() => {
    replaceOffset({ skill: skillRef.current.offsetTop });
  }, [position.link, replaceOffset]);

  return (
    <section id="skill" ref={skillRef} className="bg-slate-100 pt-28 pb-20">
      <div className="container">
        <div className="w-full">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">
              Skills
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-5 lg:4xl">
              Keahlian Yang Dikuasai
            </h2>
            <p className="font-medium text-base text-secondary lg:text-lg ">
              Bahasa pemrograman, tools, dbms, serta framework yang dikuasai
            </p>
          </div>
          <div className="mt-16 lg:grid grid-cols-2 items-start justify-center">
            <div className="flex flex-wrap gap-6 mb-20 justify-center lg:mr-20">
              <img
                src={"https://picsum.photos/100"}
                className="rounded-full"
                alt="my skill"
              />
              <img
                src={"https://picsum.photos/100"}
                className="rounded-full"
                alt="my skill"
              />
              <img
                src={"https://picsum.photos/100"}
                className="rounded-full"
                alt="my skill"
              />
              <img
                src={"https://picsum.photos/100"}
                className="rounded-full"
                alt="my skill"
              />
              <img
                src={"https://picsum.photos/100"}
                className="rounded-full"
                alt="my skill"
              />
              <img
                src={"https://picsum.photos/100"}
                className="rounded-full"
                alt="my skill"
              />
            </div>
            <div className="grid sm:grid-cols-2 justify-center">
              <div className="flex gap-x-16 mb-10">
                <h1 className="text-lg text-secondary font-semibold">2022</h1>
                <div>
                  <div className="mb-3">
                    <h1 className="text-dark font-bold">Frontend Developer</h1>
                    <p className="text-secondary text-md mt-1   ">Google</p>
                  </div>
                  <div>
                    <h1 className="text-dark font-bold">Frontend Developer</h1>
                    <p className="text-secondary text-md mt-1   ">Google</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-16 mb-10">
                <h1 className="text-lg text-secondary font-semibold">2022</h1>
                <div>
                  <div className="mb-3">
                    <h1 className="text-dark font-bold">Frontend Developer</h1>
                    <p className="text-secondary text-md mt-1   ">Google</p>
                  </div>
                  <div>
                    <h1 className="text-dark font-bold">Frontend Developer</h1>
                    <p className="text-secondary text-md mt-1   ">Google</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-16 mb-10">
                <h1 className="text-lg text-secondary font-semibold">2022</h1>
                <div>
                  <div className="mb-3">
                    <h1 className="text-dark font-bold">Frontend Developer</h1>
                    <p className="text-secondary text-md mt-1   ">Google</p>
                  </div>
                  <div>
                    <h1 className="text-dark font-bold">Frontend Developer</h1>
                    <p className="text-secondary text-md mt-1   ">Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
