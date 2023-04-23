import React from "react";
import { NavBarLink } from "../NavBar/NavBar";

type Props = {
  item: NavBarLink;
};

const MenuItem = ({ item }: Props) => {
  return (
    <div className="ml-8 text-gray-300 text-[10px] font-500 hover:text-cyan-300 ">
      {" "}
      <span className="text-cyan-300 mr-2">{item.prefix}.</span>
      {item.name}
    </div>
  );
};

export default MenuItem;
