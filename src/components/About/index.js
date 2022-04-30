import React, { useContext } from "react";
import SocialContext from "../../context/SocialMediaContext";
import { Facebook, GitHub, Instagram, LinkedIn } from "../Icons";
import WrapSocial from "../UI/WrapSocial";

function Index() {
  const { facebook, instagram, github, linkedin } =
    useContext(SocialContext).socialMedia;

  return (
    <section id="tentang" className="mb-56 pt-36">
      <div className="container">
        <h4 className="mb-3 text-lg font-bold uppercase text-primary">
          Tentang Saya
        </h4>
        <div className="flex flex-wrap">
          <div className="mb-10 w-full lg:w-1/2">
            <h2 className="lg:4xl mb-5 max-w-md text-3xl font-bold text-dark transition-colors duration-1000 dark:text-white">
              Yuk, Belajar Web di WPU bersama pramudya
            </h2>
            <p className="text-base font-medium text-secondary lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet
              quasi consequatur reiciendis numquam earum nobis dolorum nulla
              deleniti ipsum molestiae eius, cumque impedit magnam sint iusto
              distinctio sed? Similique?
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold text-dark transition-colors duration-1000 dark:text-white lg:text-3xl">
              Mari berteman
            </h3>
            <p className="mb-6 text-base font-medium text-secondary lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quidem iste, molestiae voluptatum vel, doloribus impedit quam
              totam repellendus dignissimos ipsa quas placeat eaque error fugiat
              itaque est? Pariatur, autem?
            </p>
            <div className="flex items-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
