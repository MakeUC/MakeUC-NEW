import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MakeUC",
  description: "MakeUC is a hackathon at the University of Cincinnati.",
};

//components
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About  from "./components/About";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Main />
        <About/>
        <Footer/>

        {children}
      </body>
    </html>
  );
}
