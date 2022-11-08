import image1 from "../assets/borabora.jpg";
import image2 from "../assets/borabora2.jpg";
import image3 from "../assets/keywest.jpg";
import image4 from "../assets/maldives.jpg";
import image5 from "../assets/maldives2.jpg";

const Destinations = () => {
  return (
    <section className="w-full h-full">
      <div className="max-w-[1240px] mx-auto text-center py-16 md:px-14 px-4">
        <h2>All-Inclusive Resorts</h2>
        <p>On the Caribbean's Best Beaches</p>
        <div className="grid grid-rows-none md:grid-cols-5 gap-2 md:gap-4 py-4">

          <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={image1} alt="car1" />
          <img className="w-full h-full object-cover" src={image2} alt="" />
          <img className="w-full h-full object-cover" src={image3} alt="" />
          <img className="w-full h-full object-cover" src={image4} alt="" />
          <img className="w-full h-full object-cover" src={image5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Destinations;
