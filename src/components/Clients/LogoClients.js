import React from "react";

function LogoClients({ title, logo }) {
  return (
    <img
      src={logo}
      className="cursor-pointer grayscale hover:grayscale-0 transition duration-300"
      alt={title}
    />
  );
}

export default LogoClients;
