import useStore from "modules/infrastructure/store";
import React from "react";
import ImageModalPreview from "../ImageModalPreview";
import SearchBar from "../SearchBar";

const Layout: React.FC<{}> = (props) => {
  const { selectedPhoto, setSelectedPhoto } = useStore((state) => state);

  return (
    <div className=" px-5 max-w-screen-xl mx-auto pt-10 pb-10">
      <SearchBar />
      {selectedPhoto && (
        <ImageModalPreview
          onClose={() => setSelectedPhoto(null)}
          {...selectedPhoto}
        />
      )}
      <div className="pt-10">{props.children}</div>
    </div>
  );
};

export default Layout;
