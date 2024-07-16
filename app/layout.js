import { Inter } from "next/font/google";
import "./globals.css";
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MakeUC",
  description: "MakeUC is a hackathon at the University of Cincinnati.",
};

//components
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Track from "./components/Track";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Navbar />
          <Main />
          <About />
          <Track />
          <Footer />

          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
