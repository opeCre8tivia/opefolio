import React from "react";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="w-full h-fit flex justify-start items-center p-10">
      {/* texts */}
      <div className="w-fit text-[20px] font-bold text-gray-500 mx-4">
        {title}
      </div>
      {/* line */}
      <div className="w-[200px] h-[2px] bg-gray-400"></div>
    </div>
  );
};

export default SectionTitle;
