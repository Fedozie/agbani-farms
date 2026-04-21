type FeaturedArticleProps = {
  title: string;
  image: string;
  readTime: number;
  date: string;
};

const FeaturedArticle = ({
  title,
  image,
  readTime,
  date,
}: FeaturedArticleProps) => {
  const decodeHTMLEntities = (text: string): string => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };

  return (
    <section className="lg:px-20 my-10">
      <div className="flex flex-col mb-6">
        <p className="font-worksans font-semibold text-[1.5rem] lg:text-[3rem] text-[#282828]">
          {decodeHTMLEntities(title)}
        </p>
        <div className="flex justify-start items-center gap-4 text-xs lg:text-base text-[#878787] font-normal mt-2">
          <p>{date}</p>{" "}
          <span className="block w-1 h-1 md:w-2 md:h-2 bg-[#979797] rounded-full"></span>{" "}
          <p>{readTime} mins read</p>
        </div>
      </div>

      <div>
        <img src={image} alt="Afrticle Featured Image" loading="lazy" />
      </div>

      <div className="mt-6 text-justify ">
        <p className="mb-2">
          The Oji River Local Government has announced a series of new
          development initiatives aimed at improving infrastructure, boosting
          local commerce, and enhancing the overall quality of life for
          residents across the council area. Speaking during a briefing at the
          council headquarters, the LG Chairman reaffirmed the administration’s
          commitment to delivering people-centered governance. He noted that the
          projects were carefully selected based on community needs and
          stakeholder consultations.
        </p>
        <p className="mb-2">
          Among the newly launched initiatives is the rehabilitation of key
          access roads linking rural communities to the Oji River urban center.
          The chairman explained that improved road connectivity will strengthen
          economic activity, ease transportation challenges, and support
          agricultural productivity for farmers who rely on access to local
          markets. Additionally, the local government has commenced work on a
          modern borehole water system in several communities experiencing
          long-standing water shortages. According to the council’s engineering
          department, the project is designed to provide sustainable access to
          clean drinking water, especially during dry seasons.
        </p>
        <p className="mb-2">
          In the education sector, the council has flagged off renovation work
          in select primary and secondary schools. The project includes roof
          repairs, classroom upgrades, and the provision of desks to create a
          more conducive learning environment for pupils.
        </p>
        <p className="mb-2">
          Residents across the LG area have expressed optimism about the ongoing
          projects. Local community leaders praised the council for what they
          described as “visible and impactful steps” toward improving living
          standards. The LG chairman emphasized that the administration will
          continue to prioritize transparency and inclusiveness in its
          development agenda. He assured residents that additional
          initiatives—particularly in youth empowerment, healthcare enhancement,
          and rural electrification—are expected to roll out in the coming
          months. As Oji River continues its journey of transformation, many
          stakeholders believe that sustained collaboration between the local
          government and community members will be key to ensuring long-term
          growth and development.
        </p>
      </div>
    </section>
  );
};

export { FeaturedArticle };