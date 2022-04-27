import React from "react";

function LinkNav({ nama, link, isActive, onClick }) {
  const activeN = () => {
    onClick(link);
    window.location.hash = link;
  };

  return (
    <li
      className={`group cursor-pointer my-4  rounded ${
        isActive ? "bg-primary" : "hover:bg-primary"
      } transition-all duration-200 ease-in-out`}
    >
      <button
        className={`text-base ${
          isActive ? "text-white" : "text-dark"
        } py-2 px-8  group-hover:text-white transition-all duration-200 ease-in-out`}
        onClick={activeN}
      >
        {nama}
      </button>
    </li>
  );
}

export default LinkNav;
