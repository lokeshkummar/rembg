import photo from "../assets/my-photo.jpg";
import Socials from "./Socials";

const About = () => {
  return (
    <div className="h-screen w-full mb-36 mt-16 text-[#02e797]">
      <div className="pt-7 flex items-center">
        <h2 className="text-nowrap font-bold text-xl pl-20 pr-5 text-[#02e797]">
          Front-End Developer
        </h2>
        <div className="h-1 bg-[#02e797] w-full"></div>
      </div>
      <h1 className="text-[10vw] text-center font-bold -mt-5">Lokesh Kumar</h1>

      <div className="flex justify-center ml-20 mr-10">
        <img
          className="h-[440px] border-4 border-[#02e797] hover:scale-105 ease-in-out duration-300"
          src={photo}
          alt="image"
        />
        <div>
          <p className="w-[600px] text-[1.3vw] pt-5 p-10">
            Hello! I'm Lokesh Kumar, a passionate{" "}
            <span className="font-bold text-white">Frontend Developer</span> from
            Bulandshahr, Uttar Pradesh, India. With a strong foundation in
            HTML5, CSS, Tailwind CSS, JavaScript, and ReactJS, I specialize in
            crafting visually stunning and responsive websites that not only
            meet the client's vision but also provide an exceptional user
            experience.
            <br /> <br />
            Currently, I am pursuing a{" "}
            <span className="text-white font-bold">
              Bachelor of Computer Applications (B.C.A)
            </span>{" "}
            and am in my 5th semester at CCS University. My education, combined
            with hands-on experience, has equipped me with the skills to solve
            complex problems and keep up with the latest industry trends. I am
            committed to continuously improving my craft and staying ahead in
            the rapidly evolving world of web development.
            <br /> <br />{" "}
            <span className="text-white font-bold">
              Let's create something amazing together!
            </span>
          </p>
          <div className="absolute right-20 -mt-5">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
