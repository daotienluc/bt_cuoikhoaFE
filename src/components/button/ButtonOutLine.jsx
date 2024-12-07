import React from "react";

const ButtonOutLine = ({ buttonContent }) => {
  return (
    <button className="text-[#6a6a6a] font-medium px-5 py-2 rounded-full hover:bg-[#F7F7F7]">
      {buttonContent}
    </button>
  );
};

export default ButtonOutLine;
