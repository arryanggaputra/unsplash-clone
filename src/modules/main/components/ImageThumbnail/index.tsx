import useStore from "modules/main/infrastructure/store";
import React, { useCallback } from "react";

import { Basic } from "unsplash-js/dist/methods/photos/types";
import ImagePreloader from "../ImageLazyLoad";

interface IImageThumbnail {
  onClick?: (photo: Basic) => void;
}

const ImageThumbnail: React.FC<Basic & IImageThumbnail> = (props) => {
  const { setSelectedPhoto } = useStore((state) => state);

  const onClick = useCallback(() => {
    setSelectedPhoto(props);
  }, [props]);

  return (
    <div
      onClick={onClick}
      className="h-40 overflow-hidden transition-transform hover:shadow-md rounded-md group cursor-pointer hover:scale-[120%]"
    >
      <ImagePreloader
        src={props.urls.small}
        alt={props.alt_description || ""}
        blurHash={props.blur_hash || ""}
      />
    </div>
  );
};

export default ImageThumbnail;
