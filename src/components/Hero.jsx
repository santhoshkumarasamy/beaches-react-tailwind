import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import bgVideo from "../assets/beachVid.mp4";
const Hero = () => {
  return (
    <header className="h-screen w-full relative ">
      <video
        className=" object-cover h-full w-full"
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute w-full h-full top-0 left-0 bg-gray-800/30"></div>
      <div className=" absolute w-full h-full top-0 left-0 flex justify-center items-center flex-col p-4 text-white gap-3">
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
        <form className=" ease-in-out duration-700 flex rounded-lg bg-white p-1 items-center md:w-[50%]  w-[90%] justify-between">
          <div className="w-full">
            <input type="text" name="" id="" placeholder="Search Destination" className=" outline-none text-black mx-4 w-full" />
          </div>
          <div className=" w-fit text-2xl rounded-lg bg-gradient-to-r from-primary-color-blue to-secondary-color-blue p-2">
            <AiOutlineSearch />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Hero;
