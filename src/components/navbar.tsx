import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../assets";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Product & Services", path: "/products-and-services" },
  { name: "About Us", path: "/about-us" },
  { name: "News", path: "/news" },
  { name: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scroll
    } else {
      document.body.style.overflow = "unset"; // Restore scroll
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="h-[10vh] w-full bg-[#263C28] px-8 py-4 flex items-center justify-between relative z-50 lg:px-20">
        {/* Logo */}
        <NavLink to="/" className="">
          <img
            src={Logo}
            alt="Agbani Farms"
            className="h-10 w-10 lg:h-16 lg:w-16 object-contain"
          />
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium pb-2 transition-colors duration-200 group
                ${isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {/* Underline — shows on active OR on hover */}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-primary-yellow transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-primary-yellow text-3xl focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile menu - Always rendered, slides in/out */}
      <ul className={`fixed top-[4.65rem] right-0 w-[70%] bg-[#263C28] h-full flex flex-col items-start gap-4 px-10 py-6 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {navLinks.map((link) => (
          <li key={link.name} className="w-full">
            <NavLink
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `relative block text-sm font-medium pb-2 w-fit transition-colors duration-200 group
                ${isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-primary-yellow transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export { Navbar };