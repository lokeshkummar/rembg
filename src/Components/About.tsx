import photo from "../assets/my-photo.jpg";
import Socials from "./Socials";

const About = () => {
  return (
    <div className="h-screen w-full md:mb-36 mt-16 text-[#02e797]">
      <div className="md:pt-7 py-7 flex items-center">
        <h2 className="text-nowrap font-bold text-2xl md:text-xl pl-20 pr-5 text-[#02e797]">
          Front-End Developer
        </h2>
        <div className="h-1 bg-[#02e797] w-full"></div>
      </div>
      <h1 className="hidden md:block text-[10vw] text-center font-bold -mt-5">Lokesh Kumar</h1>

      <div className="md:flex flex-col md:flex-row justify-center md:ml-20 md:mr-10">
        <img
          className="h-[440px] mx-5 border-2 shadow-lg shadow-[#02e797] border-[#02e797] hover:scale-105 ease-in-out duration-300"
          src={photo}
          alt="image"
        />
        <div className="mx-5 pt-5 md:pt-0">
          <p className="md:w-[600px] md:leading-relaxed text-xs md:text-[1.3vw] pt-5 md:p-5">
            Hello! I'm <span className="font-bold text-white text-base ">Lokesh Kumar</span>, a passionate{" "}
            <span className="font-bold text-white text-base animate-pulse">Front-End Developer</span> from
            Bulandshahr, Uttar Pradesh, India. With a strong foundation in
            HTML5, CSS, Tailwind CSS, JavaScript, and ReactJS, I specialize in
            crafting visually stunning and responsive websites that not only
            meet the client's vision but also provide an exceptional user
            experience.
            <br /> <br />
            Currently, I am pursuing a{" "}
            <span className="text-white font-bold text-base">
              Bachelor of Computer Applications (B.C.A)
            </span>{" "}
            and am in my 5th semester at CCS University. My education, combined
            with hands-on experience, has equipped me with the skills to solve
            complex problems and keep up with the latest industry trends. I am
            committed to continuously improving my craft and staying ahead in
            the rapidly evolving world of web development.
            <br /> <br />{" "}
            <span className="text-white font-bold text-base animate-pulse">
              Let's create something amazing together!
            </span>
          </p>
          <div className="hidden md:block absolute right-20 -mt-5">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
