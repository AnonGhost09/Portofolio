import React, { useRef, useEffect, useState, useContext } from "react";
import PositionContext from "../../context/PositionContext";
import HamburgerButton from "../UI/HamburgerButton";
import LinkNav from "./LinkNav";

function Index() {
  //index huruf Inya harus besar agar bisa memakai useRef
  const headerRef = useRef();
  const context = useContext(PositionContext);
  const navbar = context.navBar;
  const [hamburger, setHamburger] = useState(false);
  const [dark, setDark] = useState(false);

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };
  const root = window.document.documentElement;
  const darkModeChange = () => {
    if (dark) {
      localStorage.setItem("dark", false);
      setDark(false);
      root.classList.remove("dark");
    } else {
      setDark(true);
      localStorage.setItem("dark", true);
      root.classList.add("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      setDark(true);
      root.classList.add("dark");
    }
  }, [root]);

  useEffect(() => {
    window.addEventListener("click", e => {
      if (!e.target.className.includes("hamburger")) {
        setHamburger(false);
      }
    });

    const cekHeader = () => {
      if (window.scrollY > headerRef.current.offsetHeight - 20) {
        headerRef.current.classList.add("navbar-fixed");
      } else if (window.scrollY === 0) {
        headerRef.current.classList.remove("navbar-fixed");
      }
    };

    window.addEventListener("scroll", cekHeader);
    return () => {
      window.removeEventListener("scroll", cekHeader);
    };
  }, [hamburger]);

  let visibleNav = hamburger
    ? "-translate-y-0 opacity-100"
    : "-translate-y-5 opacity-0 invisible lg:-translate-y-0 lg:opacity-100 lg:visible";

  return (
    <>
      <span id="home" className="bg-dark"></span>
      <header
        className="transitinon-all sticky z-[9999] bg-transparent py-2 duration-1000 ease-in-out dark:bg-dark dark:bg-opacity-50  "
        ref={headerRef}
      >
        <div className="container relative flex justify-between py-1">
          <span className="flex items-center">
            <a href="#home" className="text-lg font-semibold  text-primary">
              PramudyaLogo
            </a>
          </span>
          <div className="hamburger flex items-center">
            <HamburgerButton
              hamburger={hamburger}
              hamburgerHandler={hamburgerHandler}
            />
            <nav
              className={`hamburger absolute w-full max-w-[200px] bg-white py-5 dark:bg-dark lg:static lg:border-none lg:bg-transparent lg:py-0 lg:shadow-none ${visibleNav} top-24 right-0 rounded-lg border-2 border-secondary shadow-md transition duration-1000 ease-in-out dark:shadow-slate-500 lg:max-w-full lg:dark:bg-transparent`}
            >
              <span className="hamburger absolute -top-4 right-5 border-2 border-x-[15px] border-t-0 border-b-[15px] border-secondary border-x-transparent border-t-white lg:hidden "></span>
              <ul className="hamburger font-bold text-secondary lg:flex lg:items-center">
                {navbar.map((item, index) => {
                  return (
                    <LinkNav
                      key={index}
                      nama={item.nama}
                      link={item.link}
                      isActive={item.isActive}
                    />
                  );
                })}
                <li
                  onClick={darkModeChange}
                  className="ml-5 flex cursor-pointer lg:ml-10"
                >
                  <p>Light</p>
                  <div
                    className={`border-1 hamburger group mx-2  flex w-12 cursor-pointer items-center rounded-full border border-slate-700 ${
                      dark && "bg-secondary"
                    }`}
                  >
                    <span
                      className={`hamburger mx-[3px] h-5 w-5 ${
                        dark
                          ? "translate-x-5 bg-dark"
                          : "translate-x-0 bg-primary"
                      } rounded-full  transition duration-1000`}
                    ></span>
                  </div>

                  <p>Dark</p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Index;
