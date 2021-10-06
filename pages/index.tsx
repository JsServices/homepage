import Wrapper from "../components/wrapper"; 
import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/outline";
import { LocLink, Box } from "../components/misc";
import React from "react";

export default function homepage() {
  return (
    <>
      <Wrapper name="Home">
        <div className="h-screen md:h-[45vh] flex flex-col md:flex-row items-center justify-center md:justify-between px-14 lg:px-32 relative">
          <div>
            <h1 className="font-semibold text-5xl tracking-wide text-center md:text-left">Wave Studios</h1>
            <h2 className="font-light text-xl text-gray-300 pb-72 md:pb-0 text-center mt-5 md:">No templates. No PHP. Just clean, modern code.</h2>
          </div>
          <div className="hidden md:block transform -rotate-12 bg-gray-800 py-6 px-4 rounded">
            idk what to put here
          </div>
          <div className="md:hidden absolute bottom-32 animate-bounce" onClick={() => scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })}>
            <ArrowDownIcon className="w-6 h-6" /> 
          </div> 
        </div>
        <div className="space-y-44 mb-44">
          <Box name="JSBoard" image="/jsboard-website.png" site="/jsboard" btn1="Learn More" btn2={false} linkTo="/jsboard"  left={false}>
            Imagine a free, open source forums software, built for the modern web that doesn't take 10 hours to install the packages. Introducing JSBoard. A modern forums solution but for the modern web. Coming early 2022. 
          </Box>
          <Box name="Quartz Studios" image="/quartz-website.png" site="https://quartzstudios.net" left={true} btn1="Case Study" btn2={true} linkTo="/case-studys/quartzstudios">
            Quartz Studios is a MineCraft server creation studio that creates high-quality servers, and needed a similarly high-quality, professional website to match. Starting with a clean front page that will update to a playercounter once they release, we carefully handcrafted a unique design to show the care and effort put into their creations.
          </Box>
        </div>
      </Wrapper>
    </>
  );
}
