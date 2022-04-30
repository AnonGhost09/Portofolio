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
    <section
      id="testimoni"
      className=" bg-dark pt-28 pb-20 transition-colors duration-1000 dark:bg-dark"
    >
      <div className="container">
        <div className="w-full">
          <div className="mx-auto w-full text-center">
            <h4 className="mb-3 text-lg font-bold uppercase text-primary">
              Testimoni
            </h4>
            <h2 className="lg:4xl mb-5 text-3xl font-bold text-white">
              Testimoni dari berbagai pengguna
            </h2>
            <p className="text-base font-medium text-secondary lg:text-lg ">
              Tanggapan dari para pengguna dengan hasil yang memuaskan
            </p>
            <div className="mt-20 flex justify-center gap-x-5">
              {data.slice(position, position + 1).map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`h-full w-full overflow-hidden rounded-lg bg-white pb-7 shadow-lg transition-all duration-300 dark:bg-dark ${
                      animation ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt="testi"
                      className="h-[500px] w-full object-cover"
                    />
                    <h1 className="mt-4 text-xl font-bold text-dark transition-colors duration-1000 dark:text-white">
                      {item.nama}
                    </h1>
                    <i className="block p-5 text-secondary">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Illum ducimus nihil neque, ratione quidem debitis nam quod
                      voluptatibus
                    </i>
                    <button className="mt-3 rounded bg-primary px-6 py-4 font-semibold text-white hover:bg-secondary">
                      Baca Selengkapnya
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="mt-2 flex justify-center gap-x-1 overflow-hidden">
              {data.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`inline-block h-[8px] w-[8px] rounded-full bg-white  ${
                      index === position ? "opacity-100" : "opacity-50"
                    }`}
                  ></span>
                );
              })}
            </div>
            <div className="mt-5 flex justify-center gap-x-10">
              <button
                className="flex h-10 w-10 items-center rounded-full bg-white p-4 hover:bg-primary hover:text-white"
                onClick={prev}
              >
                ❮
              </button>
              <button
                className="flex h-10 w-10 items-center rounded-full bg-white p-4 hover:bg-primary hover:text-white"
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
