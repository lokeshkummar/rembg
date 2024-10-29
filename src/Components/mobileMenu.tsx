import { useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Policy", to: "/policy" },
    { label: "Disclaimer", to: "/disclaimer" },
  ];

  return (
    <div className="block md:hidden relative">
      <button
        onClick={toggleMenu}
        className="text-4xl text-white bg-[#ffffff28] backdrop-blur-lg rounded p-1 active:scale-90 ease-linear duration-200 border border-slate-600"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <HiX /> : <HiMenuAlt1 />}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-7 mr-2 ease-linear duration-300 w-48 bg-[#000000] backdrop-blur-xl rounded-md py-2 border-2 border-[#ffffff45]">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `block px-4 py-2 text-md ${
                  isActive ? "text-[#02e797]" : "text-white"} font-semibold`}
              onClick={toggleMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
