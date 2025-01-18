"use client";
import { AiFillPlusCircle } from "react-icons/ai";
import React, { type JSX } from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
  return (
    <button
      className=" bg-cyan-600 w-full h-full flex items-center gap-3 justify-center text-white rounded-md hover:bg-cyan-700 transition"
      onClick={onClick}
    >
      <AiFillPlusCircle size={23} />
      {text}
    </button>
  );
};
