import React, { useContext, useEffect, useState } from "react";
import PositionContext from "../../context/PositionContext";
import SocialMediaContext from "../../context/SocialMediaContext";
import { Instagram, Facebook, GitHub, LinkedIn } from "../Icons";
import WrapSocial from "../UI/WrapSocial";

function Index() {
  const context = useContext(SocialMediaContext);
  const { instagram, facebook, github, linkedin } = context.socialMedia;
  const { handleActive } = useContext(PositionContext);
  const [toTopActive, setToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setToTop(true);
    } else {
      setToTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toScroll = e => {
    handleActive(e.target.hash);
  };
  return (
    <footer id="footer" className="bg-dark pb-10 pt-28 text-white ">
      <div className="container grid grid-cols-1 gap-y-20 border-b border-slate-700 pb-20  text-center sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h1 className="text-3xl font-bold uppercase">Pramudya</h1>
          <h4 className="mt-3 mb-2 text-2xl font-bold text-slate-300">
            Hubungi Kami
          </h4>
          <i className="text-md text-slate-300">pramudyaalamsyah@gmail.com</i>
          <address className="text-md text-slate-300">
            Jl. H. Cari No. 90 Tangerang Selatan
          </address>
        </div>
        <div>
          <h1 className="mb-2 text-xl font-bold">Kategori Tulisan</h1>
          <ul className="text-md grid gap-2 text-slate-300">
            <li>Programming</li>
            <li>Teknologi</li>
            <li>Design</li>
          </ul>
        </div>
        <div className="sm:w-[200%] lg:w-auto">
          <h1 className="mb-2 text-xl font-bold">Tautan</h1>
          <ul className="text-md grid gap-2 text-slate-300">
            <li>
              <a
                href="#home"
                onClick={toScroll}
                className="hover:text-slate-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#tentang"
                onClick={toScroll}
                className="hover:text-slate-100"
              >
                Tentang Saya{" "}
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={toScroll}
                className="hover:text-slate-100"
              >
                Portfolio{" "}
              </a>
            </li>
            <li>
              <a
                href="#clients"
                onClick={toScroll}
                className="hover:text-slate-100"
              >
                Clients{" "}
              </a>
            </li>
            <li>
              <a
                href="#skill"
                onClick={toScroll}
                className="hover:text-slate-100"
              >
                Skill{" "}
              </a>
            </li>
            <li>
              <a
                href="#testimoni"
                onClick={toScroll}
                className="hover:text-slate-100"
              >
                Testimoni{" "}
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                onClick={toScroll}
                className="hover:text-slate-100"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-14 text-center">
        <div className="mb-12 flex justify-center gap-2">
          <WrapSocial link={instagram}>
            <Instagram />
          </WrapSocial>
          <WrapSocial link={facebook}>
            <Facebook />
          </WrapSocial>
          <WrapSocial link={github}>
            <GitHub />
          </WrapSocial>
          <WrapSocial link={linkedin}>
            <LinkedIn />
          </WrapSocial>
        </div>
        <p className="text-xs">
          Dibuat dengan <span className="text-red-600">❤</span> oleh Pramudya
          Diva Alamsyah, menggunakan
          <span className="font-bold text-primary"> Tailwind CSS </span> dan
          <span className="font-bold text-sky-400"> React JS</span>
        </p>
      </div>

      <a
        href="#home"
        className={`transitio fixed right-10 bottom-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary p-4 text-4xl duration-200 hover:animate-pulse ${
          toTopActive ? "visible opacity-100" : ` invisible  opacity-0`
        }`}
      >
        ⬆
      </a>
    </footer>
  );
}

export default Index;
