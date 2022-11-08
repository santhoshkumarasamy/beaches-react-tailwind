import image1 from "../assets/borabora.jpg";
import image2 from "../assets/borabora2.jpg";
import image3 from "../assets/keywest.jpg";
import image4 from "../assets/maldives.jpg";
import image5 from "../assets/maldives2.jpg";
import image6 from "../assets/maldives3.jpg";
import SelectCard from "./SelectCard";

const Selects = () => {
  return (
    <section className="max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-2 px-8 py-16">
    
      <SelectCard image={image1} title={"Maldives"}/>
      <SelectCard image={image2} title={"Bora Bora"}/>
      <SelectCard image={image3} title={"Antigua"}/>
      <SelectCard image={image4} title={"Cozumel"}/>
      <SelectCard image={image5} title={"Jamaica"}/>
      <SelectCard image={image6} title={"Key West"}/>
    </section>
  )
}

export default Selects
