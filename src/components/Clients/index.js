import React from "react";
import logoBukalapak from "../../assets/images/logo-bukalapak.png";
import logoGojek from "../../assets/images/logo-gojek.png";
import logoGoogle from "../../assets/images/logo-google.png";
import logoShopee from "../../assets/images/logo-shopee.png";

import LogoClients from "./LogoClients";

let logos = [
  {
    title: "Logo Shopee",
    logo: logoShopee,
  },
  {
    title: "Logo Google",
    logo: logoGoogle,
  },
  {
    title: "Logo Gojek",
    logo: logoGojek,
  },
  {
    title: "Logo Bukalapak",
    logo: logoBukalapak,
  },
];

function Index() {
  return (
    <section id="clients" className="bg-dark pt-36 pb-20">
      <div className="container">
        <div className="w-full">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">
              Clients
            </h4>
            <h2 className="font-bold text-white text-3xl mb-5 lg:4xl">
              Yang Pernah Bekerjasama
            </h2>
            <p className="font-medium text-base text-secondary lg:text-lg ">
              Clients yang pernah bekerjasama untuk pembuatan website dan
              aplikasi
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-5 items-center justify-center w-2/3 lg:w-full mx-auto mt-16">
              {logos.map((item, index) => {
                return (
                  <LogoClients
                    key={index}
                    logo={item.logo}
                    title={item.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
