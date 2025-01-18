import React from "react";

export const InfoCard = () => {
  return (
    <div
      className="bg-cover flex justify-center items-center bg-center bg-no-repeat relative w-full h-80 p-5"
      style={{
        backgroundImage: "url('/assets/infoCard.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-800 to-transparent"></div>
      <h2 className="relative font-montserrat z-10 text-white text-4xl font-semibold w-1/3 text-center">
        Crie, consulte e edite seus chamados.
      </h2>
    </div>
  );
};
