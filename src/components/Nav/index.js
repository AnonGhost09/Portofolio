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

  const hamburgerHandler = handler => {
    setHamburger(!handler);
  };

  useEffect(() => {
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
  }, []);

  let visibleNav = hamburger
    ? "-translate-y-0 opacity-100"
    : "-translate-y-5 opacity-0 invisible lg:-translate-y-0 lg:opacity-100 lg:visible";

  return (
    <header
      className="transitio-all sticky z-[9999] bg-transparent py-2 duration-300 ease-in-out"
      ref={headerRef}
    >
      <div className="container relative flex justify-between py-1">
        <span className="flex items-center">
          <a href="#home" className="text-lg font-semibold  text-primary">
            PramudyaLogo
          </a>
        </span>
        <div className="flex items-center">
          <HamburgerButton
            hamburger={hamburger}
            hamburgerHandler={hamburgerHandler}
          />
          <nav
            className={`absolute w-full max-w-[200px] bg-white py-5 lg:static lg:border-none lg:bg-transparent lg:py-0 lg:shadow-none ${visibleNav} top-24 right-0 rounded-lg border-2 border-secondary shadow-md transition-all duration-200 ease-in-out  lg:max-w-full`}
          >
            <span className="absolute -top-4 right-5 border-2 border-x-[15px] border-t-0 border-b-[15px] border-secondary border-x-transparent border-t-white lg:hidden "></span>
            <ul className="font-bold text-secondary lg:flex">
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Index;
