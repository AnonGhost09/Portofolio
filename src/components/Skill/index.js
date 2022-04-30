import React from "react";
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
  return (
    <section
      id="skill"
      className="bg-slate-100 pt-28 pb-20 transition-colors duration-1000 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full">
          <div className="mx-auto max-w-xl text-center">
            <h4 className="mb-3 text-lg font-bold uppercase text-primary ">
              Skills
            </h4>
            <h2 className="lg:4xl mb-5 text-3xl font-bold text-dark transition-colors duration-1000 dark:text-white">
              Keahlian Yang Dikuasai
            </h2>
            <p className="text-base font-medium text-secondary lg:text-lg ">
              Bahasa pemrograman, tools, dbms, serta framework yang dikuasai
            </p>
          </div>
          <div className="mt-16 grid-cols-2 items-start justify-center lg:grid">
            <div className="mb-20 flex flex-wrap justify-center gap-6 lg:mr-20">
              <img
                src={react}
                className="h-24 w-24 rounded-full bg-primary p-2"
                alt="React JS"
              />
              <img
                src={next}
                className="h-24 w-24 rounded-full bg-primary p-2"
                alt="Next JS"
              />
              <img
                src={css}
                className="h-24 w-24 rounded-full bg-primary p-2"
                alt="CSS"
              />
              <img
                src={html}
                className="h-24 w-24 rounded-full bg-primary p-2"
                alt="HTML"
              />
              <img
                src={js}
                className="h-24 w-24 rounded-full bg-primary p-2"
                alt="Java Script"
              />
              <img
                src={git}
                className="h-24 w-24 rounded-full bg-primary p-2"
                alt="Git"
              />
              <img
                src={gitHub}
                className="h-24 w-24 rounded-full bg-primary p-2"
                alt="GitHub"
              />
              <img
                src={figma}
                className="h-24 w-24 rounded-full bg-primary p-2"
                alt="Figma"
              />
              <img
                src={laravel}
                className="h-24 w-24 rounded-full bg-primary p-2"
                alt="Laravel"
              />
              <img
                src={express}
                className="h-24 w-24 rounded-full bg-primary p-2"
                alt="Express JS"
              />
              <img
                src={mysql}
                className="h-24 w-24 rounded-full bg-primary p-2"
                alt="MySQL"
              />
              <img
                src={tailwind}
                className="h-24 w-24 rounded-full bg-primary bg-contain p-2"
                alt="Tailwind CSS"
              />
              <img
                src={bootstrap}
                className="h-24 w-24 rounded-full bg-primary p-2"
                alt="Bootstrap"
              />
            </div>
            <div className="grid justify-center sm:grid-cols-2">
              <div className="mb-10 flex gap-x-16">
                <h1 className="text-lg font-semibold text-secondary">2019</h1>
                <div>
                  <div className="mb-3">
                    <h1 className="font-bold text-dark transition-colors duration-1000 dark:text-white">
                      Frontend Developer
                    </h1>
                    <p className="text-md mt-1 text-secondary ">Learn Self</p>
                  </div>
                  <div>
                    <h1 className="font-bold text-dark transition-colors duration-1000 dark:text-white">
                      UI/UX Designer
                    </h1>
                    <p className="text-md mt-1 text-secondary   ">Learn Self</p>
                  </div>
                </div>
              </div>
              <div className="mb-10 flex gap-x-16">
                <h1 className="text-lg font-semibold text-secondary">2021</h1>
                <div>
                  <div className="mb-3">
                    <h1 className="font-bold text-dark transition-colors duration-1000 dark:text-white">
                      Backend Developer
                    </h1>
                    <p className="text-md mt-1 text-secondary  ">Learn Self</p>
                  </div>
                </div>
              </div>
              <div className="mb-10 flex gap-x-16">
                <h1 className="text-lg font-semibold text-secondary">2022</h1>
                <div>
                  <div className="mb-3">
                    <h1 className="font-bold text-dark transition-colors duration-1000 dark:text-white">
                      Fullstack Web Developer
                    </h1>
                    <p className="text-md mt-1 text-secondary   ">Learn Self</p>
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
