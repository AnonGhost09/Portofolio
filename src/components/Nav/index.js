import React from "react";

function index() {
  return (
    <header className="bg-transparent sticky top-0 z-10 ">
      <div className="container flex py-5 justify-between">
        <span className="flex items-center">
          <a href="#home" className="font-bold text-lg text-primary">
            PramudyaLogo
          </a>
        </span>
        <nav className="items-center flex">
          <button id="hamburger" name="hamburger" type="button" className="">
            <span className="hamburger-menu"></span>
            <span className="hamburger-menu"></span>
            <span className="hamburger-menu"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default index;
