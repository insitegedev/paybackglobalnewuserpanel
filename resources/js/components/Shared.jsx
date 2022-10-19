import React from "react";

export const Button = ({ onClick, text }) => {
  return (
    <button
      className="mainButon w-full p-3 bg-purple text-white text-md rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
