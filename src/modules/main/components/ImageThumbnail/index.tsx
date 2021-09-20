import React from "react";
import { Basic } from "unsplash-js/dist/methods/photos/types";

const ImageThumbnail: React.FC<Basic> = (props) => {
  return (
    <div className="h-40 overflow-hidden transition-transform hover:shadow-md rounded-md group cursor-pointer hover:scale-[120%]">
      <img
        src={props.urls.small}
        alt={props.alt_description || ""}
        className="object-cover h-full w-full  rounded-md "
      />
    </div>
  );
};

export default ImageThumbnail;
