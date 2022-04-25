import React from "react";

function HamburgerButton({ hamburger, hamburgerHandler }) {
  const burger = () => {
    hamburgerHandler(hamburger);
  };

  let hamburgerMenu = hamburger ? "hamburger-active" : "";

  return (
    <button
      id="hamburger"
      name="hamburger"
      onClick={burger}
      type="button"
      className={`lg:hidden ${hamburgerMenu}`}
    >
      <span className="hamburger-menu origin-top-left"></span>
      <span className="hamburger-menu"></span>
      <span className="hamburger-menu origin-bottom-left"></span>
    </button>
  );
}

export default HamburgerButton;
