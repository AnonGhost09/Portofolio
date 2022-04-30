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
      className={`group my-4 flex cursor-pointer rounded ${
        isActive ? "bg-primary" : "hover:bg-primary"
      } hamburger  py-2 transition-all duration-1000 ease-in-out`}
    >
      <a
        href={link}
        onClick={clickMe}
        className={`hamburger text-base dark:text-white ${
          isActive ? "text-white" : "text-dark"
        } py-2 px-4  transition-all duration-1000 ease-in-out group-hover:text-white xl:px-8`}
      >
        {nama}
      </a>
    </li>
  );
}

export default LinkNav;
