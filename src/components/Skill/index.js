import React, { useContext, useEffect, useRef } from "react";
import PositionContext from "../../context/PositionContext";
import react from "../../assets/images/react.png";
import js from "../../assets/images/js.png";
import next from "../../assets/images/next.png";
import tailwind from "../../assets/images/tailwind.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import express from "../../assets/images/express.png";
import git from "../../assets/images/git.png";
import gitHub from "../../assets/images/gitHub.png";
import figma from "../../assets/images/figma.png";
import laravel from "../../assets/images/laravel.png";
import mysql from "../../assets/images/mysql.png";
import bootstrap from "../../assets/images/bootstrap.png";

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
                src={react}
                className="rounded-full w-24 h-24 bg-primary p-2"
                alt="React JS"
              />
              <img
                src={next}
                className="rounded-full w-24 h-24 bg-primary p-2"
                alt="Next JS"
              />
              <img
                src={css}
                className="rounded-full w-24 h-24 bg-primary p-2"
                alt="CSS"
              />
              <img
                src={html}
                className="rounded-full w-24 h-24 bg-primary p-2"
                alt="HTML"
              />
              <img
                src={js}
                className="rounded-full w-24 h-24 bg-primary p-2"
                alt="Java Script"
              />
              <img
                src={git}
                className="rounded-full w-24 h-24 bg-primary p-2"
                alt="Git"
              />
              <img
                src={gitHub}
                className="rounded-full w-24 h-24 bg-primary p-2"
                alt="GitHub"
              />
              <img
                src={figma}
                className="rounded-full w-24 h-24 bg-primary p-2"
                alt="Figma"
              />
              <img
                src={laravel}
                className="rounded-full w-24 h-24 bg-primary p-2"
                alt="Laravel"
              />
              <img
                src={express}
                className="rounded-full w-24 h-24 bg-primary p-2"
                alt="Express JS"
              />
              <img
                src={mysql}
                className="rounded-full w-24 h-24 bg-primary p-2"
                alt="MySQL"
              />
              <img
                src={tailwind}
                className="rounded-full w-24 h-24 bg-primary p-2 bg-contain"
                alt="Tailwind CSS"
              />
              <img
                src={bootstrap}
                className="rounded-full w-24 h-24 bg-primary p-2"
                alt="Bootstrap"
              />
            </div>
            <div className="grid sm:grid-cols-2 justify-center">
              <div className="flex gap-x-16 mb-10">
                <h1 className="text-lg text-secondary font-semibold">2019</h1>
                <div>
                  <div className="mb-3">
                    <h1 className="text-dark font-bold">Frontend Developer</h1>
                    <p className="text-secondary text-md mt-1 ">Learn Self</p>
                  </div>
                  <div>
                    <h1 className="text-dark font-bold">UI/UX Designer</h1>
                    <p className="text-secondary text-md mt-1   ">Learn Self</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-16 mb-10">
                <h1 className="text-lg text-secondary font-semibold">2021</h1>
                <div>
                  <div className="mb-3">
                    <h1 className="text-dark font-bold">Backend Developer</h1>
                    <p className="text-secondary text-md mt-1  ">Learn Self</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-16 mb-10">
                <h1 className="text-lg text-secondary font-semibold">2022</h1>
                <div>
                  <div className="mb-3">
                    <h1 className="text-dark font-bold">
                      Fullstack Web Developer
                    </h1>
                    <p className="text-secondary text-md mt-1   ">Learn Self</p>
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
