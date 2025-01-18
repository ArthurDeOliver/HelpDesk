import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"], // Suporte a idiomas
  weight: ["100", "300", "400", "500", "700", "900"], // Todos os pesos disponíveis
});

const roboto = Roboto({
  subsets: ["latin"], // Suporte a idiomas
  weight: ["100", "300", "400", "500", "700", "900"], // Todos os pesos disponíveis
});

export const metadata: Metadata = {
  title: "HelpDesk",
  description: "Crie seus chamados de suporte de forma simples e rápida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
