import type React from "react";

type StatementProps = {
  image: React.ReactNode;
  title: string;
  description: string;
}

const Statement = ({image, title, description}:StatementProps) => {
  return (  
    <div className="flex bg-green-bg/95 gap-6 items-center py-16 px-10 rounded-2xl">
      <div>
        {image}
      </div>
      <div>
        <div className="text-primary-yellow font-semibold text-2xl mb-4">{title}</div>
        <div className="text-white font-normal text-lg">{description}</div>
      </div>
    </div>
  );
}
 
export {Statement};