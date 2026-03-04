import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { SubscribeEmail } from "./subscribeEmail";

const Footer: React.FC = () => {
  const socials: { icon: React.ReactNode; link: string }[] = [
    {
      icon: <FaFacebookF color="#F7C35F"/>,
      link: "",
    },
    {
      icon: <FaTwitter color="#F7C35F" />,
      link: "",
    },
    {
      icon: <FaYoutube color="#F7C35F" />,
      link: "",
    },
    {
      icon: <FaInstagram color="#F7C35F" />,
      link: "",
    },
  ];

  const navLinks: { name: string; link: string }[] = [
    { name: "New Projects", link: "/projects" },
    { name: "Our Services", link: "/services" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "About Us", link: "/abou-us" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <footer className="w-full bg-primary-green text-white ">
      <div className="w-full flex justify-between p-16">
        <div>
          <p className="text-primary-white text-[2.5rem] font-bold mb-4">
            Agbani Farms
          </p>
          <p className="text-primary-white text-lg font-normal mb-6">
            Agbani Farms is a forward-thinking agribusiness committed
            <br />
            to sustainable farming, quality production, and <br /> delivering
            fresh, reliable agricultural products that nourish <br />{" "}
            communities and support food security.
          </p>
          <div className="bg-primary-white h-px w-full"></div>
          <div className="flex justify-start items-center gap-6 mt-6">
            {socials.map((social, index) => (
              <Link
                to={social.link}
                key={index}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-2xl "
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-10 mr-20">
          <div>
            <p className="text-xl font-semibold py-4">Useful Links</p>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index} className="">
                  <Link to={link.link} className="block mb-3">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-80">
            <p className="text-xl font-semibold py-4">Newsletter</p>
            <p className="mb-4">
              Subscribe to our weekly Newsletter and <br /> receive updates via
              email.
            </p>
            <SubscribeEmail />
          </div>
        </div>
      </div>

      <div className="w-full border-t border-primary-white p-16">
        <p className="text-sm text-primary-white font-normal">Copyright &copy; Agbani Farms. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export { Footer };
