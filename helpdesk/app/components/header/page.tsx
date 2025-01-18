"use client";

import React from "react";
import Image from "next/image";
import { MdLogout } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <header className="flex justify-start px-10 py-3 items-center w-full gap-5">
        <Image
          src="/assets/ticket.png"
          width={45}
          height={200}
          alt="logo"
          unoptimized
        />
        <h1 className="text-2xl font-semibold font-montserrat text-cyan-800">
          HelpDesk
        </h1>
      </header>

      <div></div>
    </>
  );
};
