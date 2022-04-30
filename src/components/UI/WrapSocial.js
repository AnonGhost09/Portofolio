import React from "react";

function WrapSocial({ link, children }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 mr-3 cursor-pointer rounded-full border text-secondary border-slate-300 hover:text-white hover:bg-primary flex items-center justify-center"
    >
      {children}
    </a>
  );
}

export default WrapSocial;
