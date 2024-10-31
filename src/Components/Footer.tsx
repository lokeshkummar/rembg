import { TiScissorsOutline } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="mt-20 md:-mt-0">
      <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <div className="flex items-center">
            <NavLink to="/" className="text-[#02e797]">
              <TiScissorsOutline size={32} />
            </NavLink>
            <NavLink to="/" className="text-[#02e797] text-3xl font-bold">
              REMBG.
            </NavLink>
          </div>
        </div>

        <p className="hidden text-sm md:block mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
          Effortlessly remove backgrounds with a single click—fast, free, and
          flawless. Try it now and elevate your images!
        </p>

        <ul className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#02e797]" : "text-white"
                } text-sm font-semibold hover:text-[#02e797]`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#02e797]" : "text-white"
                } text-sm font-semibold hover:text-[#02e797]`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#02e797]" : "text-white"
                } text-sm font-semibold hover:text-[#02e797]`
              }
              to="/policy"
            >
              Policy
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#02e797]" : "text-white"
                } text-sm font-semibold hover:text-[#02e797]`
              }
              to="/disclaimer"
            >
              Disclaimer
            </NavLink>
          </li>
        </ul>

        <ul className="mt-10 flex justify-center gap-6 md:gap-8">
          <li>
            <Link
              to="https://www.linkedin.com/in/lokesh-kummar/"
              rel="noreferrer"
              target="_blank"
              className="text-[#02e797] ease-linear duration-300 hover:text-[#ffffff]"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={28} />
            </Link>
          </li>

          <li>
            <Link
              to="https://x.com/lokeshkummar"
              rel="noreferrer"
              target="_blank"
              className="text-[#02e797] ease-linear duration-300 hover:text-[#ffffff]"
            >
              <span className="sr-only">Twitter</span>
              <FaSquareXTwitter size={28} />
            </Link>
          </li>

          <li>
            <Link
              to="https://github.com/lokeshkummar"
              rel="noreferrer"
              target="_blank"
              className="text-[#02e797] ease-linear duration-300 hover:text-[#ffffff]"
            >
              <span className="sr-only">GitHub</span>
              <FaGithubSquare size={28} />
            </Link>
          </li>

          <li>
            <Link
              to="https://portfolio-website-ten-pi.vercel.app/"
              rel="noreferrer"
              target="_blank"
              className="text-[#02e797] ease-linear duration-300 hover:text-[#ffffff]"
            >
              <span className="sr-only">Website</span>
              <IoGlobeOutline size={28} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full py-3 bg-[#000000] border-t border-slate-700 text-center">
        <span className="text-xs text-[#02e797] opacity-50">Copyright &#169;rembg.in | All Rights Reserved. </span>
      </div>
    </footer>
  );
};

export default Footer;
