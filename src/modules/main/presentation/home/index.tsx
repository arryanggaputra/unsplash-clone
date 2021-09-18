import React from "react";
import SearchBar from "modules/main/components/SearchBar";

const Home: React.FC<{}> = () => {
  return (
    <div className="max-w-screen-lg mx-auto pt-10">
      <SearchBar />
    </div>
  );
};

export default Home;
