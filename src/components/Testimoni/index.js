import React, { useState } from "react";
import testi1 from "../../assets/images/atta.jpg";
import testi2 from "../../assets/images/andika.jpeg";
import testi3 from "../../assets/images/riaRicis.jpg";

const data = [
  {
    image: testi1,
    nama: "Atta Geledeg",
  },
  {
    image: testi2,
    nama: "Andhika Saskeh",
  },
  {
    image: testi3,
    nama: "Ria Recheese",
  },
];
function Index() {
  const [position, setPosition] = useState(0);
  const [animation, setAnimation] = useState(true);

  const next = () => {
    setTimeout(() => {
      setAnimation(true);
      if (position === data.length - 1) {
        setPosition(0);
      } else {
        setPosition(position + 1);
      }
      setAnimation(true);
    }, 300);
    setAnimation(false);
  };

  const prev = () => {
    setTimeout(() => {
      if (position === 0) {
        setPosition(data.length - 1);
      } else {
        setPosition(position - 1);
      }
      setAnimation(true);
    }, 300);
    setAnimation(false);
  };

  return (
    <section id="testimoni" className=" bg-dark pt-28 pb-20">
      <div className="container">
        <div className="w-full">
          <div className="mx-auto text-center w-full">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">
              Testimoni
            </h4>
            <h2 className="font-bold text-white text-3xl mb-5 lg:4xl">
              Testimoni dari berbagai pengguna
            </h2>
            <p className="font-medium text-base text-secondary lg:text-lg ">
              Tanggapan dari para pengguna dengan hasil yang memuaskan
            </p>
            <div className="mt-20 justify-center flex gap-x-5">
              {data.slice(position, position + 1).map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`w-full h-full pb-7 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                      animation ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt="testi"
                      className="h-1/2 w-full object-cover"
                    />
                    <h1 className="text-xl text-dark font-bold mt-4">
                      {item.nama}
                    </h1>
                    <i className="p-5 text-secondary block">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Illum ducimus nihil neque, ratione quidem debitis nam quod
                      voluptatibus
                    </i>
                    <button className="px-6 py-4 bg-primary text-white font-semibold rounded mt-3 hover:bg-secondary">
                      Baca Selengkapnya
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center mt-2 gap-x-1 overflow-hidden">
              {data.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`w-[8px] h-[8px] bg-white inline-block rounded-full  ${
                      index === position ? "opacity-100" : "opacity-50"
                    }`}
                  ></span>
                );
              })}
            </div>
            <div className="mt-5 flex justify-center gap-x-10">
              <button
                className="bg-white p-4 rounded-full w-10 h-10 flex items-center hover:bg-primary hover:text-white"
                onClick={prev}
              >
                ❮
              </button>
              <button
                className="bg-white p-4 rounded-full w-10 h-10 flex items-center hover:bg-primary hover:text-white"
                onClick={next}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
