import React from "react";

function LinkNav({ nama, link, isActive, onClick }) {
  const activeN = () => {
    onClick(link);
  };

  return (
    <li
      className={`group cursor-pointer my-4  rounded ${
        isActive ? "bg-primary" : "hover:bg-primary"
      } transition-all duration-200 ease-in-out`}
      onClick={activeN}
    >
      <a
        href={link}
        className={`text-base ${
          isActive ? "text-white" : "text-dark"
        } py-2 px-8  group-hover:text-white transition-all duration-200 ease-in-out`}
      >
        {nama}
      </a>
    </li>
  );
}

export default LinkNav;
