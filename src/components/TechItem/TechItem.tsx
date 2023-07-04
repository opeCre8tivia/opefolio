import React from "react";

type Props = {
  name: string;
  icon: React.ReactElement;
  description: string;
};

const TechItem = ({ name, icon, description }: Props) => {
  return (
    <div className="flex ">
      {/* name */}
      <div>{name}</div>
      {/*  */}
      <div className="flex">
        <div>{name}</div>
        {/*  */}
        <div>{description}</div>
      </div>
    </div>
  );
};

export default TechItem;
