import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../assets";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Product & Services", path: "/products-and-services" },
  { name: "About Us", path: "/about-us" },
  { name: "News", path: "/news" },
  { name: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#263C28] px-10 py-4 flex items-center justify-between">
      {/* Logo */}
      <NavLink to="/" className="">
        <img src={Logo} alt="Agbani Farms" className="h-16 w-16 object-contain" />
      </NavLink>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-10">
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
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="absolute top-24 left-0 w-full bg-[#263C28] flex flex-col items-start gap-4 px-10 py-6 z-50 md:hidden">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full">
              <NavLink
                to={link.path}
                onClick={() => setMenuOpen(false)}
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
      )}
    </nav>
  );
};

export { Navbar };