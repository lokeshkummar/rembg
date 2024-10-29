import { TiScissorsOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import MobileMenu from "./mobileMenu";

const Navbar = () => {
  return (
    <header className="bg-[#00000049] backdrop-blur-md border-b border-gray-600 z-50 fixed w-full top-0">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <div className="flex items-center">
              <NavLink to="/" className="text-[#02e797]">
                <TiScissorsOutline size={32} />
              </NavLink>
              <NavLink to="/" className="text-[#02e797] text-3xl font-bold">
                REMBG.
              </NavLink>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `font-bold transition ${
                        isActive ? "text-[#02e797]" : "text-white"
                      } hover:text-[#02e797]`
                    }
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `font-bold transition ${
                        isActive ? "text-[#02e797]" : "text-white"
                      } hover:text-[#02e797]`
                    }
                  >
                    {" "}
                    About{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/policy"
                    className={({ isActive }) =>
                      `font-bold transition ${
                        isActive ? "text-[#02e797]" : "text-white"
                      } hover:text-[#02e797]`
                    }
                  >
                    {" "}
                    Policy{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/disclaimer"
                    className={({ isActive }) =>
                      `font-bold transition ${
                        isActive ? "text-[#02e797]" : "text-white"
                      } hover:text-[#02e797]`
                    }
                  >
                    {" "}
                    Disclaimer{" "}
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="flex items-center">
              <div className="block md:hidden">
                  <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
