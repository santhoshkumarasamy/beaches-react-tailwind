import { useState } from "react";
import image1 from "../assets/borabora.jpg";
import image2 from "../assets/borabora2.jpg";
import image3 from "../assets/keywest.jpg";
import image4 from "../assets/maldives.jpg";
import image5 from "../assets/maldives2.jpg";
import image6 from "../assets/maldives3.jpg";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = () => {
  const numberOfImages = 5;
  const [activeImage, setActiveImage] = useState(0);
  const handleImageChange = (number) => {
    // console.log(number);
    if (number > numberOfImages) {
      // console.log("setting 0");
      setActiveImage(0);
    } else if (number >= 0 && number <= numberOfImages) {
      // console.log("setting - "+ number);
      setActiveImage(number);
    } else if (number < 0) {
      setActiveImage(numberOfImages);
      //   console.log("setting "+ numberOfImages);
    }
  };
  return (
    <div className="max-w-[1240px] mx-auto h-full w-full relative flex justify-center items-center px-4 py-16 ">
      <div className="p-2 md:p-4 text-2xl rounded-full bg-gray-600/30 hover:bg-gray-700/70">
        <AiOutlineLeft
          className="cursor-pointer"
          onClick={() => {
            handleImageChange(activeImage - 1);
          }}
        />
      </div>
      {[image1, image2, image3, image4, image5, image6].map((image, index) => {
        return (
          <div
            key={index}
            className={
              index === activeImage
                ? "w-[40rem] md:w-[40rem] max-h-[20rem]  rounded-xl shadow-2xl hover:scale-105 overflow-hidden animate-slider mx-2 md:mx-8"
                : "hidden"
            }
          >
            <img
              className=" object-cover relative overflow-hidden "
              src={image}
              alt={index}
            />
          </div>
        );
      })}
      <div
        className="p-2 md:p-4 text-2xl rounded-full bg-gray-600/30 hover:bg-gray-700/70 cursor-pointer"
        onClick={() => {
          handleImageChange(activeImage + 1);
        }}
      >
        <AiOutlineRight  />
      </div>
    </div>
  );
};

export default Carousel;
