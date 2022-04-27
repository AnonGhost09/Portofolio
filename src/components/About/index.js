import React, { useContext, useEffect, useRef } from "react";
import PositionContext from "../../context/PositionContext";
import { Facebook, GitHub, Instagram, LinkedIn } from "../Icons";

function Index() {
  const tentangRef = useRef();
  const context = useContext(PositionContext);
  const { position, replaceOffset } = context;

  useEffect(() => {
    replaceOffset({ tentang: tentangRef.current.offsetTop });
  }, [position.link, replaceOffset]);

  return (
    <section id="tentang" ref={tentangRef} className="mb-56">
      <div className="container">
        <h4 className="font-bold uppercase text-primary text-lg mb-3">
          Tentang Saya
        </h4>
        <div className="flex flex-wrap">
          <div className="w-full mb-10 lg:w-1/2">
            <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:4xl">
              Yuk, Belajar Web di WPU bersama pramudya
            </h2>
            <p className="font-medium text-base text-secondary lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet
              quasi consequatur reiciendis numquam earum nobis dolorum nulla
              deleniti ipsum molestiae eius, cumque impedit magnam sint iusto
              distinctio sed? Similique?
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl">
              Mari berteman
            </h3>
            <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quidem iste, molestiae voluptatum vel, doloribus impedit quam
              totam repellendus dignissimos ipsa quas placeat eaque error fugiat
              itaque est? Pariatur, autem?
            </p>
            <div className="flex items-center">
              <a
                href="www.facebook.com"
                className="w-12 h-12 mr-3 rounded-full border text-secondary border-slate-300 hover:text-white hover:bg-primary flex items-center justify-center"
              >
                <Instagram />
              </a>
              <a
                href="www.facebook.com"
                className="w-12 h-12 mr-3 rounded-full border text-secondary border-slate-300 hover:text-white hover:bg-primary flex items-center justify-center"
              >
                <Facebook />
              </a>
              <a
                href="www.facebook.com"
                className="w-12 h-12 mr-3 rounded-full border text-secondary border-slate-300 hover:text-white hover:bg-primary flex items-center justify-center"
              >
                <LinkedIn />
              </a>
              <a
                href="www.facebook.com"
                className="w-12 h-12 mr-3 rounded-full border text-secondary border-slate-300 hover:text-white hover:bg-primary flex items-center justify-center"
              >
                <GitHub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
