import React from "react";
import SearchBar from "../SearchBar";

const Layout: React.FC<{}> = (props) => {
  return (
    <div className=" px-5 max-w-screen-xl mx-auto pt-10 pb-10">
      <SearchBar />
      <div className="pt-10">{props.children}</div>
    </div>
  );
};

export default Layout;
