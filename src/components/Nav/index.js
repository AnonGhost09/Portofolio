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

      // handleActive("");

      // if (window.scrollY >= 6299) {
      //   handleActive("#contacts");
      // } else if (window.scrollY >= 4949) {
      //   handleActive("#testimoni");
      // } else if (window.scrollY >= 4033) {
      //   handleActive("#skill");
      // } else if (window.scrollY >= 3519) {
      //   handleActive("#clients");
      // } else if (window.scrollY >= 1689) {
      //   handleActive("#portfolio");
      // } else if (window.scrollY >= 1065) {
      //   handleActive("#tentang");
      // } else if (window.scrollY >= 96) {
      //   handleActive("#home");
      // } else {
      //   handleActive("");
      // }
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
      className="bg-transparent sticky transitio-all duration-300 ease-in-out z-[9999] py-2"
      ref={headerRef}
    >
      <div className="container flex py-1 justify-between relative">
        <span className="flex items-center">
          <a href="#home" className="font-semibold text-lg  text-primary">
            PramudyaLogo
          </a>
        </span>
        <div className="items-center flex">
          <HamburgerButton
            hamburger={hamburger}
            hamburgerHandler={hamburgerHandler}
          />
          <nav
            className={`absolute lg:static bg-white lg:bg-transparent w-full py-5 lg:py-0 lg:shadow-none lg:border-none max-w-[200px] ${visibleNav} rounded-lg top-24 right-0 shadow-md lg:max-w-full transition-all duration-200 ease-in-out border-2  border-secondary`}
          >
            <span className="absolute lg:hidden border-2 border-secondary -top-4 right-5 border-t-white border-t-0 border-x-transparent border-x-[15px] border-b-[15px] "></span>
            <ul className="lg:flex font-bold text-secondary">
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
