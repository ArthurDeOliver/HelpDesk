"use client";

import React from "react";
import { TicketLayout } from "../../components/ticketLayout/page";
import { Header } from "../../components/header/page";
import { InfoCard } from "../../components/infoCard/page";

export function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <InfoCard />
      <TicketLayout />
    </div>
  );
}
