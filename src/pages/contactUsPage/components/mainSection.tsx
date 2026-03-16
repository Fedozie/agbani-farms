import { GrMail } from "react-icons/gr";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { ContactForm } from "./contactForm";

type CTAProps = {
  icon: React.ReactNode;
  text: string;
};

const MainSection = () => {
  const ctaInfos = [
    {
      icon: <GrMail size={40} color="#F7C35F" />,
      text: "Want to make inquires about our products or services? mail us @agbanifarm.com",
    },
    {
      icon: <IoIosPeople size={40} color="#F7C35F" />,
      text: "Follow us on facebook, LinkedIn, and Instagram",
    },
    {
      icon: <FaEnvelopeOpenText size={40} color="#F7C35F" />,
      text: "Subscribe to our newsletter to always stay updated",
    },
  ];

  return (
    <div className="px-10 py-12 g:px-20 lg:py-24 bg-green-bg w-full">
      <div className="w-full">
        <p className="text-white text-3xl lg:text-[3.125rem] font-bold">Contact Us</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-start ">
        <div className="w-full lg:w-[50%]">
          <p className="text-white block w-full lg:w-[70%] my-8">
            Need something cleared up? Our Team is happy to answer. Fill out the
            form, and we’ll be in touch as soon as possible.
          </p>
          <div className="w-full flex flex-col gap-6">
            {ctaInfos.map((ctaInfo, index) => (
              <CTAcard key={index} icon={ctaInfo.icon} text={ctaInfo.text} />
            ))}
          </div>
        </div>
        <div className="w-full mt-10 lg:mt-0 lg:w-[50%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export { MainSection };

const CTAcard = ({ icon, text }: CTAProps) => {
  return (
    <div className="lg:w-[70%] bg-[#263C28] border border-primary-yellow flex justify-start items-center gap-4 border-l-8 py-5 px-7 rounded-lg">
      {icon}
      <div>
        <p className="text-white text-sm lg:text-lg">{text}</p>
      </div>
    </div>
  );
};