import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
const Search = () => {
  return (
    <section className="max-w-[1240px] bg-white text-black mx-auto grid grid-cols-1 md:grid-cols-3 px-16 py-12 gap-2">
      <div className="col-span-2">
        <h1 className="uppercase">Lorem ipsum dolor sit amet.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          fugit atque corrupti numquam ipsam explicabo labore quisquam nemo quas
          aliquid odio, veniam maxime commodi, unde deserunt dolorum ex
          voluptates nostrum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ducimus veniam, iure voluptatem adipisci deleniti accusamus.
          Incidunt facere similique aspernatur veniam. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Reprehenderit, reiciendis.
        </p>

        <div className="py-4 mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="uppercase grid md:grid-cols-4 gap-2 text-center items-center">
            <div className=" md:col-span-1 text-5xl bg-gradient-to-r mx-auto  from-primary-color-blue to-secondary-color-blue flex items-center p-2 rounded-lg text-white">
              <RiCustomerService2Fill />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-xl">LEADING SERVICE</h2>
              <p className="py-2 text-sm">
                All inclusive company for 10 years in a row
              </p>
            </div>
          </div>

          <div className="uppercase grid md:grid-cols-4 gap-2 text-center items-center">
            <div className=" md:col-span-1 text-5xl bg-gradient-to-r mx-auto from-primary-color-blue to-secondary-color-blue flex items-center p-2 rounded-lg text-white">
              <MdOutlineTravelExplore />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-xl">LEADING SERVICE</h2>
              <p className="py-2 text-sm">
                All inclusive company for 10 years in a row
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="border-2 border-gray-700/30 p-4 text-center uppercase flex flex-col items-center gap-3">
          <h6>GET an additional 105 off</h6>
          <h6>12 Hours left</h6>

          <div className="w-[90%] py-2 text-white cursor-pointer rounded-none bg-gray-900 ">
            book now and save
          </div>
        </div>
        <form className="w-full flex flex-col gap-2 pt-4">
          <div className="w-full flex flex-col">
            <label>Destination</label>
            <select className=" p-2 border-gray-700/40 border rounded-lg ">
              <option value="">Grande Antigua</option>
              <option value=""> Kazhakastan</option>
              <option value="">Ooty</option>
            </select>
          </div>

          <div className="w-full flex flex-col">
            <label>Check-In</label>
            <input
              className=" p-2 border-gray-700/40 border rounded-lg"
              type="date"
              name=""
              id=""
            />
          </div>

          <div className="w-full flex flex-col">
            <label>Check-Out</label>
            <input
              className=" p-2 border-gray-700/40 border rounded-lg"
              type="date"
              name=""
              id=""
            />
          </div>

          <button className="p-0 py-3">Rates and Availabilities</button>
        </form>
      </div>
    </section>
  );
};

export default Search;
