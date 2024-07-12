import React from "react";
const MakeUCText = "/images/makeuc-text.png";
const Logo = '/images/logo.png'
import Link from "next/link";


const Main = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-70px)]">
      <div className="absolute h-full w-full hero-image -z-10" />
      <div className="flex flex-1 justify-center items-center md:-translate-y-[35px]">
        <div className="flex flex-col p-8 pt-48 md:flex-row justify-between items-center w-full max-w-7xl md:pt-8 gap-16">
          <div>
            <img src={MakeUCText} alt="MakeUC" />
            <div className="text-muted-foreground text-xl mt-4">
              November 4 - 5, 2023
            </div>
            <Link href="/live" passHref>
              <button className="p-[3px] relative mt-5">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  VIEW HACKATHON INFORMATION
                </div>
              </button>
            </Link>
          </div>
          <div>
            <img src={Logo} alt="MakeUC Butterfly Logo" width={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
