import React, { useContext, useEffect, useRef, useState } from "react";
import PositionContext from "../../context/PositionContext";

function Index() {
  const contactRef = useRef();
  const [submit, setSubmit] = useState(false);

  const submitHandler = e => {
    e.preventDefault();

    setSubmit(true);
  };

  const context = useContext(PositionContext);
  const { position, replaceOffset } = context;

  useEffect(() => {
    replaceOffset({ contacts: contactRef.current.offsetTop });
  }, [position.link, replaceOffset]);
  return (
    <section id="contacts" ref={contactRef} className="pt-28 pb-20 bg-white">
      <div className="container">
        <div className="w-full">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">
              Contact
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-5 lg:4xl">
              Hubungi Kami
            </h2>
            <p className="font-medium text-base text-secondary lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates animi iusto, quibusdam repellat voluptatem excepturi
              distinctio
            </p>
          </div>
          {submit ? (
            <h1 className="text-center font-extrabold text-3xl text-primary">
              PESAN BERHASIL DIKIRIM
            </h1>
          ) : (
            <form className="lg:w-2/3 lg:mx-auto" onSubmit={submitHandler}>
              <label htmlFor="nama" className="text-primary font-bold">
                Nama
              </label>
              <input
                type="text"
                className="w-full bg-slate-300 outline-primary p-3 rounded-md mb-7"
                placeholder="Masukan Nama"
              />
              <label htmlFor="nama" className="text-primary font-bold">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-slate-300 outline-primary p-3 rounded-md mb-7"
                placeholder="Masukan Email"
              />
              <label htmlFor="nama" className="text-primary font-bold">
                Pesan
              </label>
              <textarea
                type="text"
                className="w-full bg-slate-300 outline-primary p-3 h-36 rounded-md mb-7"
                placeholder="Masukan Pesam"
              />
              <button
                type="submit"
                className="w-full p-3 bg-primary text-white font-bold text-lg rounded-full"
              >
                Kirim Pesan
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Index;
