import { useState, useEffect } from "react";
import { Logo } from "../assets";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { TransitionLayout } from "./transitionLayout";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about-us" },
  { name: "News & Media", path: "/news" },
  { name: "Contact Us", path: "/contact-us" },
];

interface Props {
  to: string;
  children: (props: { isActive: boolean }) => React.ReactNode;
  className?: (props: { isActive: boolean }) => string;
  onClick?: () => void;
}

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
        <TransitionNavLink to="/">
          {() => (
            <img
              src={Logo}
              alt="Agbani Farms"
              loading="lazy"
              className="h-10 w-10 lg:h-16 lg:w-16 object-contain"
            />
          )}
        </TransitionNavLink>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <TransitionNavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative text-base font-medium pb-2 transition-colors duration-200 group
          ${isActive ? "text-white text-lg font-bold" : "text-white/50 hover:text-white"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-primary-yellow transition-all duration-300
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </>
                )}
              </TransitionNavLink>
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
      <ul
        className={`fixed top-[4.65rem] right-0 w-[70%] bg-[#263C28] h-full flex flex-col items-start gap-4 px-10 py-6 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.name} className="w-full">
            <TransitionNavLink
              to={link.path}
              onClick={closeMenu} // 🔥 keeps your existing behavior
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
            </TransitionNavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export { Navbar };

export const TransitionNavLink = ({
  to,
  children,
  className,
  onClick,
}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === to;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (onClick) onClick(); // 🔥 keep your mobile closeMenu logic

    TransitionLayout(() => navigate(to));
  };

  return (
    <a href={to} onClick={handleClick} className={className?.({ isActive })}>
      {children({ isActive })}
    </a>
  );
};
