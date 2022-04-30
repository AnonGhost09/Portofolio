import React from "react";

function WorkPortfolio({ number, filter, name, onClick }) {
  return (
    <button
      className={`font-semibold ${
        filter === number
          ? `bg-primary text-white`
          : `bg-white text-dark shadow `
      } mx-2 rounded-lg px-4 py-2 hover:bg-primary hover:text-white`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default WorkPortfolio;
