import React from "react";
import { truncate } from "../../utils/truncate";

function CardPortfolio({ deskripsi, title, image, link }) {
  return (
    <div className="card ">
      <div className="group relative flex cursor-pointer items-center justify-center">
        <div className="absolute h-full w-full rounded-lg opacity-40 transition duration-300 group-hover:bg-dark"></div>
        <h1 className="absolute z-10 hidden text-2xl font-extrabold text-white group-hover:block">
          Go To Project Site
        </h1>
        <img src={image} alt={title} className="h-96 w-full rounded-lg" />
      </div>

      <h6 className=" my-4 text-xl font-semibold text-dark transition-colors duration-1000 dark:text-white">
        {title}
      </h6>
      <p className="text-secondary ">{truncate(deskripsi, 200, link)}</p>
    </div>
  );
}

export default CardPortfolio;
