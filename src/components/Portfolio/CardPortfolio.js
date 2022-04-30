import React from "react";
import { truncate } from "../../utils/truncate";

function CardPortfolio({ deskripsi, title, image, link }) {
  return (
    <div className="card ">
      <div className="relative cursor-pointer group flex items-center justify-center">
        <div className="absolute group-hover:bg-dark w-full h-full opacity-40 transition duration-300 rounded-lg"></div>
        <h1 className="text-white z-10 font-extrabold text-2xl group-hover:block hidden absolute">
          Go To Project Site
        </h1>
        <img src={image} alt={title} className="rounded-lg h-96 w-full" />
      </div>

      <h6 className=" text-dark font-semibold text-xl my-4">{title}</h6>
      <p className="text-secondary">{truncate(deskripsi, 200, link)}</p>
    </div>
  );
}

export default CardPortfolio;
