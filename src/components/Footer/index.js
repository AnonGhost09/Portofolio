import React, { useContext } from "react";
import PositionContext from "../../context/PositionContext";
import SocialMediaContext from "../../context/SocialMediaContext";
import { Instagram, Facebook, GitHub, LinkedIn } from "../Icons";
import WrapSocial from "../UI/WrapSocial";

function Index() {
  const context = useContext(SocialMediaContext);
  const { instagram, facebook, github, linkedin } = context.socialMedia;
  const { handleActive } = useContext(PositionContext);

  const toScroll = e => {
    handleActive(e.target.hash);
  };
  return (
    <footer id="footer" className="bg-dark text-white pb-10 pt-28 ">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-y-20  border-b border-slate-700 pb-20">
        <div>
          <h1 className="uppercase font-bold text-3xl">Pramudya</h1>
          <h4 className="text-slate-300 text-2xl font-bold mt-3 mb-2">
            Hubungi Kami
          </h4>
          <i className="text-slate-300 text-md">pramudyaalamsyah@gmail.com</i>
          <address className="text-slate-300 text-md">
            Jl. H. Cari No. 90 Tangerang Selatan
          </address>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-2">Kategori Tulisan</h1>
          <ul className="grid gap-2 text-slate-300 text-md">
            <li>Programming</li>
            <li>Teknologi</li>
            <li>Design</li>
          </ul>
        </div>
        <div className="sm:w-[200%] lg:w-auto">
          <h1 className="font-bold text-xl mb-2">Tautan</h1>
          <ul className="grid gap-2 text-slate-300 text-md">
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
        <div className="flex mb-12 justify-center gap-2">
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
          <span className="text-primary font-bold"> Tailwind CSS </span> dan
          <span className="text-sky-400 font-bold"> React JS</span>
        </p>
      </div>
    </footer>
  );
}

export default Index;
