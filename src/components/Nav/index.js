import React, { useRef, useEffect, useState, useContext } from "react";
import PositionContext from "../../context/PositionContext";
import HamburgerButton from "../UI/HamburgerButton";
import LinkNav from "./LinkNav";

const navData = [
  { nama: "Home", link: "#home", isActive: false },
  { nama: "Tentang Saya", link: "#tentang", isActive: false },
  { nama: "Portfolio", link: "#portfolio", isActive: false },
  { nama: "Clients", link: "#clients", isActive: false },
  { nama: "Skill", link: "#skill", isActive: false },
  { nama: "Testimoni", link: "#testimoni", isActive: false },
  { nama: "Contacts", link: "#contacts", isActive: false },
];

let firstOpen = true;

function Index() {
  //index huruf Inya harus besar agar bisa memakai useRef
  const headerRef = useRef();
  const [hamburger, setHamburger] = useState(false);
  const [navActive, setNavActive] = useState(navData);
  const { offset } = useContext(PositionContext);

  const hamburgerHandler = handler => {
    setHamburger(!handler);
  };

  const navHandler = handler => {
    setNavActive(prevState => {
      return prevState.map(item => {
        if (item.link === handler) {
          return { ...item, isActive: true };
        }
        return { ...item, isActive: false };
      });
    });
  };

  let hash = window.location.hash;

  useEffect(() => {
    switch (hash) {
      case "#home":
        window.scroll(0, -1);
        break;
      case "#tentang":
        window.scroll(0, offset.tentang - 120);
        break;
      case "#skill":
        window.scroll(0, offset.skill);
        break;
      case "#portfolio":
        window.scroll(0, offset.portfolio);
        break;
      case "#clients":
        window.scroll(0, offset.clients);
        break;
      case "#testimoni":
        window.scroll(0, offset.testimoni);
        break;
      case "#contacts":
        window.scroll(0, offset.contacts);
        break;
      default:
        window.scroll(0, 0);
        break;
    }

    if (firstOpen) {
      navHandler(hash);
      firstOpen = false;
    }
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
  }, [offset, hash]);

  let visibleNav = hamburger
    ? "-translate-y-0 opacity-100"
    : "-translate-y-5 opacity-0 invisible lg:-translate-y-0 lg:opacity-100 lg:visible";

  return (
    <header
      className="bg-transparent sticky transitio-all duration-300 ease-in-out z-[9999]"
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
