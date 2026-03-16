import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { StatementsBgImg } from "../../../assets";

type CardsProps = {
  icon: React.ReactNode;
  heading: string;
  text: string;
};

const contacts = [
  {
    icon: <FiPhone size={40} color="#F7C35F" />,
    heading: "Phone",
    text: "+2348093782923",
  },
  {
    icon: <GoMail size={40} color="#F7C35F" />,
    heading: "Email",
    text: "info@agbanifarms.com",
  },
  {
    icon: <SlLocationPin size={40} color="#F7C35F" />,
    heading: "Address",
    text: "10 Agbani close, Agbani, Enugu, Nigeria",
  },
];

const CardsSection = () => {
  return (
    <section className="relative bg-primary-green overflow-x-hidden w-[inherit] px-10 py-8 lg:px-20 lg:py-16">
      <div
        className="absolute inset-0 opacity-20 "
        style={{
          backgroundImage: `url(${StatementsBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="text-white text-3xl lg:text-[3.125rem] font-bold text-center ">
        <p>We'd Love To Hear From You</p>
      </div>

      <div className="relative z-10 w-full flex flex-col lg:grid lg:grid-cols-3 lg:gap-10 mt-12 ">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            icon={contact.icon}
            heading={contact.heading}
            text={contact.text}
          />
        ))}
      </div>
      <div className="relative z-10 w-full my-10">
        <ContactCard
          icon={<FiPhone size={40} color="#F7C35F" />}
          heading="Operating Hours"
          text="Monday – Saturday: 7:00 AM – 6:00 PM   |   Sundays & Public Holidays: By Appointment"
        />
      </div>
    </section>
  );
};

export { CardsSection };

const ContactCard = ({ icon, heading, text }: CardsProps) => {
  return (
    <div className="z-5 bg-green-bg rounded-2xl flex justify-start items-center gap-4 py-8 px-4 w-auto">
      <div className="border border-primary-yellow p-4 rounded-full">
        {icon}
      </div>
      <div className="">
        <p className="text-white text-xl lg:text-2xl font-semibold">
          {heading}
        </p>
        <p className="text-white text-base lg:text-lg font-normal">{text}</p>
      </div>
    </div>
  );
};
