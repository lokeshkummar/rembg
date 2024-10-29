import { RiScissorsCutFill } from "react-icons/ri";
import Slider from "../Components/Slider.tsx";
import Uploader from "./Uploader.tsx";

const Hero = () => {
  return (
    <>
    <main className="w-full flex flex-col md:flex-row mb-28">
      {/* Left Section */}
      <div className="w-full md:w-[55%] h-full pb-10 px-10 md:px-0 flex justify-center">
        <div className="ml-10 text-left md:mx-20 mt-28 md:mt-36 text-white">
          <RiScissorsCutFill size={44} className="rotate-45 -mb-5 -ml-9" />
          <h3 className="text-5xl md:text-7xl font-extrabold mb-8 md:mb-14 -rotate-3">
            REMOVE
          </h3>
          <span className="text-4xl md:text-7xl font-extrabold border-2 border-dashed border-[#02e797] rounded-xl px-2 md:px-3 shadow-lg shadow-[#02e797]">
            BACKGROUND
          </span>
          <h3 className="text-4xl md:text-5xl font-extrabold mt-8 md:mt-12 rotate-3">
            FROM
            <span className="border-b-4 ml-2 md:ml-5 border-[#02e797] text-5xl md:text-6xl">
              IMAGE.
            </span>
          </h3>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full -mb-32 md:-mb-0 md:w-[45%] flex justify-center items-center mt-5 md:mt-36">
        <div className="p-7 md:p-0 w-full md:w-auto md:mr-10">
          <Slider />
        </div>
      </div>
    </main>
    <Uploader />
    </>
  );
};

export default Hero;
