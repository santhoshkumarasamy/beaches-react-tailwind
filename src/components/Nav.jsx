import { FiSearch } from "react-icons/fi";
import { AiOutlineUser, AiFillInstagram } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { VscClose } from "react-icons/vsc";
import { useState } from "react";

import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavClick = () => {
    setIsNavOpen((prev) => !prev);
  };
  const commonNavStyle =
    "max-w-[1240px] mx-auto flex px-5 h-20 items-center justify-between ";
  const commonMobileNavStyle = "px-6 md:hidden  bg-white pb-4 rounded-bl-lg rounded-br-lg";
  return (
    <nav className="absolute w-full z-10">
      <div
        className={
          !isNavOpen
            ? commonNavStyle + "  text-white bg-transparent"
            : commonNavStyle + " bg-white text-black md:bg-transparent md:text-white"
        }
      >
        <h1 className=" uppercase font-extrabold ">Beaches.</h1>
        <ul className="hidden md:flex ">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>Views</li>
          <li>Book</li>
        </ul>
        <div className="md:flex text-2xl gap-1 hidden">
          <FiSearch />
          <AiOutlineUser />
        </div>
        <div className="flex text-2xl gap-1 md:hidden cursor-pointer ">
          {!isNavOpen ? (
            <HiOutlineMenuAlt4 onClick={handleNavClick} />
          ) : (
            <VscClose onClick={handleNavClick} />
          )}
        </div>
      </div>
      <div className={isNavOpen ? commonMobileNavStyle : "hidden"}>
        <ul className="mx-4 delay-200 animate-nav">
          <li className="border-b-2 border-gray-400">Home</li>
          <li className="border-b-2 border-gray-400">Destination</li>
          <li className="border-b-2 border-gray-400">Travel</li>
          <li className="border-b-2 border-gray-400">Views</li>
          <li className="border-b-2 border-gray-400">Book</li>
        </ul>
        <div className=" flex flex-col my-4 gap-3 animate-nav">
          <button className=" hover:bg-[right_center]">Search</button>
          <button>Account</button>
        </div>
        <div className="flex justify-between mx-4 animate-nav">
          <BsFacebook className="text-primary-color-blue " size={25} />
          <BsTwitter className="text-primary-color-blue " size={25} />
          <AiFillInstagram className="text-primary-color-blue " size={25} />
          <BsPinterest className="text-primary-color-blue " size={25} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
