import { OurStoryImg, AboutUsImg } from "../../../assets";

const IntroSection = () => {
  const aboutContent = [
    {
      story: "",
      title: "About Agbani Farms Limited",
      image: AboutUsImg,
      description: [
        "Agbani Farms Limited is a leading integrated agricultural enterprise headquartered at No. 1 Onyemuche Close, Agbani, Nkanu West Local Government Area, Enugu State, Nigeria. Since our founding, we have grown from a regional farming operation into one of the most comprehensive and innovative agribusinesses in South-East Nigeria.",
        "Located in Agbani, a community deeply rooted in farming traditions and the administrative seat of Nkanu West LGA, our farm reflects the spirit of the land it occupies: productive, resilient, and community-driven. We operate across five interconnected agricultural value chains: livestock production, crop cultivation, fish farming, processing and value addition, and agribusiness training and consultancy.",
        "Our farm is not only a place of production. It is a hub of innovation, a source of employment for hundreds of community members, and a training ground for the next generation of Nigerian agri-entrepreneurs. At Agbani Farms, we believe that the future of Nigeria's food security lies in the hands of well-equipped, well-resourced, and forward-thinking farmers, and we are committed to building that future every day.",
      ],
    },
    {
      story: "Our Story",
      title:
        "From fertile local soils to one of the largest integrated farms in the South-East",
      image: OurStoryImg,
      description: [
        "Agbani Farms Limited was established with a clear and purposeful vision: to create an agricultural enterprise that goes beyond subsistence farming to deliver commercial-scale, high-quality food production to Nigerian communities and beyond. Starting with a strong foundation in the fertile soils of Nkanu West, our founders recognised that Agbani's geography, climate, and community spirit made it the ideal location for an integrated farm of national significance.",
        "Over the years, we have invested in modern infrastructure, from tarpaulin and earthen fish ponds and hatchery systems to crop processing facilities and livestock management units, building one of the most technologically advanced and operationally diverse farms in the region. Our fish farming operation alone has grown to be recognised as one of the largest in South-East Nigeria.",
        "Today, Agbani Farms continues to grow; in footprint, in output, in impact, and in ambition.",
      ],
    },
  ];

  return (
    <section className="bg-green-bg px-10 py-8 lg:px-20 lg:py-16 flex flex-col gap-24">
      {aboutContent.map((content, index) => (
        <IntroPart
          key={index}
          title={content.title}
          story={content.story}
          description={content.description}
          image={content.image}
        />
      ))}
    </section>
  );
};

export { IntroSection };

interface IntroProps {
  story?: string;
  title: string;
  image?: string;
  description: string[];
}

export const IntroPart = ({ story, title, image, description }: IntroProps) => {
  return (
    <section className="w-full">
      <div>
        <p className="uppercase text-white font-normal lg:text-xl mb-6">
          {story}
        </p>
      </div>
      <div>
        <p className="text-white lg:text-[3.125rem] font-bold leading-[100%]">
          {title}
        </p>
      </div>
      <div className="my-10 w-full lg:h-120">
        <img
          src={image}
          alt="About Us Image"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div>
        {description.map((paragraph, index) => (
          <p key={index} className="text-white text-xl leading-6.75 mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
