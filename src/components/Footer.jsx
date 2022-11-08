import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsPinterest, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-400/30 px-4 py-16">
      <div className="max-w-[1240px]  mx-auto ">
        <div className="flex justify-between flex-col md:flex-row items-center">
          <h1 className="px-4">BEACHES.</h1>
          <div className="flex gap-12 p-2 px-4">
            <BsFacebook className="text-primary-color-blue " size={25} />
            <BsTwitter className="text-primary-color-blue " size={25} />
            <AiFillInstagram className="text-primary-color-blue " size={25} />
            <BsPinterest className="text-primary-color-blue " size={25} />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row">
          <ul className="flex flex-col md:text-left lg:flex-row text-center  border-b-2 border-black md:border-none">
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="flex flex-col md:text-right lg:flex-row text-center">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
