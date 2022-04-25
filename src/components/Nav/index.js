import React, { useRef, useEffect, useState } from "react";
import HamburgerButton from "../UI/HamburgerButton";
import LinkNav from "./LinkNav";

const navData = [
  { nama: "Home", link: "#home", isActive: false },
  { nama: "Tentang Saya", link: "#tentang", isActive: false },
  { nama: "Portofolio", link: "#portofolio", isActive: false },
  { nama: "Clients", link: "#clients", isActive: false },
  { nama: "Blog", link: "#blog", isActive: false },
  { nama: "Contacts", link: "#contacts", isActive: false },
];

let firstOpen = true;

function Index() {
  //index huruf Inya harus besar agar bisa memakai useRef
  const headerRef = useRef();
  const [hamburger, setHamburger] = useState(false);
  const [navActive, setNavActive] = useState(navData);

  const hamburgerHandler = handler => {
    setHamburger(!handler);
  };

  const navHandler = handler => {
    setNavActive(prevState => {
      return prevState.map(item => {
        if (item.link === handler) {
          return { ...item, isActive: true };
        } else {
          return { ...item, isActive: false };
        }
      });
    });
  };

  useEffect(() => {
    if (firstOpen) {
      navHandler(window.location.hash);
      firstOpen = false;
    }
    const cekHeader = () => {
      if (window.scrollY > headerRef.current.offsetHeight) {
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
      className="bg-transparent sticky transitio-all duration-300 ease-in-out z-[9999]"
      ref={headerRef}
    >
      <div className="container flex py-5 justify-between relative">
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
            <ul className="lg:flex">
              {navActive.map((item, index) => {
                return (
                  <LinkNav
                    key={index}
                    nama={item.nama}
                    link={item.link}
                    isActive={item.isActive}
                    onClick={navHandler}
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
