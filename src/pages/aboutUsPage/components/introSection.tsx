


const IntroSection = () => {
  return (
    <section>
      
    </section>
  );
}
 
export {IntroSection};

interface IntroProps{
  story?: string;
  title: string;
  image: string;
  description: string;
}


export const IntroPart = ({story, title, image, description}:IntroProps) => {
  return (
    <section>
      <div>
        <p className="uppercase">{story}</p>
      </div>
      <div></div>
      <div></div>
      <div></div>

    </section>
  );
}
