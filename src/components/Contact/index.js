import React, { useState } from "react";

function Index() {
  const [submit, setSubmit] = useState(false);

  const submitHandler = e => {
    e.preventDefault();

    setSubmit(true);
  };

  return (
    <section
      id="contacts"
      className="bg-white pt-28 pb-20 transition-colors duration-1000 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-3 text-lg font-bold uppercase text-primary">
              Contact
            </h4>
            <h2 className="mb-5 text-3xl font-bold text-dark transition-colors duration-1000 dark:text-white lg:text-4xl">
              Hubungi Kami
            </h2>
            <p className="text-base font-medium text-secondary lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates animi iusto, quibusdam repellat voluptatem excepturi
              distinctio
            </p>
          </div>
          {submit ? (
            <h1 className="text-center text-3xl font-extrabold text-primary">
              PESAN BERHASIL DIKIRIM
            </h1>
          ) : (
            <form className="lg:mx-auto lg:w-2/3" onSubmit={submitHandler}>
              <label htmlFor="nama" className="font-bold text-primary">
                Nama
              </label>
              <input
                type="text"
                className="mb-7 w-full rounded-md bg-slate-300 p-3 outline-primary"
                placeholder="Masukan Nama"
              />
              <label htmlFor="nama" className="font-bold text-primary">
                Email
              </label>
              <input
                type="email"
                className="place: mb-7 w-full rounded-md bg-slate-300 p-3 outline-primary "
                placeholder="Masukan Email"
              />
              <label htmlFor="nama" className="font-bold text-primary">
                Pesan
              </label>
              <textarea
                type="text"
                className="mb-7 h-36 w-full rounded-md bg-slate-300 p-3 outline-primary"
                placeholder="Masukan Pesam"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-primary p-3 text-lg font-bold text-white"
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
