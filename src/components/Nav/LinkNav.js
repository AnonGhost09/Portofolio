import React, { useContext } from "react";
import PositionContext from "../../context/PositionContext";

function LinkNav({ link, nama, isActive }) {
  const context = useContext(PositionContext);
  const { handleActive } = context;

  const clickMe = () => {
    handleActive(link);
  };
  return (
    <li
      className={`group cursor-pointer my-4  rounded ${
        isActive ? "bg-primary" : "hover:bg-primary"
      } transition-all duration-200 ease-in-out py-2`}
    >
      <a
        href={link}
        onClick={clickMe}
        className={`text-base ${
          isActive ? "text-white" : "text-dark"
        } py-2  px-4 xl:px-8  group-hover:text-white transition-all duration-200 ease-in-out`}
      >
        {nama}
      </a>
    </li>
  );
}

export default LinkNav;
