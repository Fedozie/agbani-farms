import { TeamCard } from "./teamCard";
import { MeetOurTeamBg } from "../../../assets";

const MeetOurTeam = () => {
  const members = [
    {
      name: "Barr. Onyemuche Nnamani",
      title: "Founder/Managing Director",
      bio: "A visionary agribusiness leader with decades of experience in integrated farm management and agricultural enterprise development across South-East Nigeria.",
      imageSrc: "",
    },
    {
      name: "Barr. Onyemuche Nnamani",
      title: "Founder/Managing Director",
      bio: "A visionary agribusiness leader with decades of experience in integrated farm management and agricultural enterprise development across South-East Nigeria.",
      imageSrc: "",
    },
    {
      name: "Barr. Onyemuche Nnamani",
      title: "Founder/Managing Director",
      bio: "A visionary agribusiness leader with decades of experience in integrated farm management and agricultural enterprise development across South-East Nigeria.",
      imageSrc: "",
    },
    {
      name: "Barr. Onyemuche Nnamani",
      title: "Founder/Managing Director",
      bio: "A visionary agribusiness leader with decades of experience in integrated farm management and agricultural enterprise development across South-East Nigeria.",
      imageSrc: "",
    },
  ];

  return (
    <section className="relative w-full bg-[#263C28] px-10 py-8 lg:px-20 lg:py-16">
      <div className="absolute inset-0" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${MeetOurTeamBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div>
        <p className="text-[3.125rem] text-white text-center font-bold">
          Meet Our Team
        </p>
      </div>
      <div className="mx-auto w-[60%] my-4">
        <p className="text-white text-center text-xl">
          Agbani Farms is powered by a passionate, experienced, and
          multi-disciplinary team of agricultural professionals, business
          managers, technical specialists, and field workers, all united by a
          shared commitment to excellence in farming and agribusiness.
        </p>
      </div>
      <div className="w-[80%] grid grid-cols-2 gap-y-40 mx-auto my-10">
        {members.map((member, index) => (
          <div className="w-full h-full flex justify-center items-center">
            <TeamCard
              key={index}
              name={member.name}
              title={member.title}
              bio={member.bio}
              imageSrc={member.imageSrc}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { MeetOurTeam };
