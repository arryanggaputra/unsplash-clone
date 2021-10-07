import useStore from "modules/main/infrastructure/store";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Basic } from "unsplash-js/dist/methods/photos/types";
import LoveIcon from "../Icons/LoveIcon";
import ImagePreloader from "../ImageLazyLoad";

interface IImageThumbnail {
  onClick?: (photo: Basic) => void;
}

const ImageThumbnail: React.FC<Basic & IImageThumbnail> = (props) => {
  const { setSelectedPhoto, addImageLikes, imageLikes } = useStore(
    (state) => state
  );

  const isLiked = useMemo(() => {
    let isExists = imageLikes.find((item) => item.id === props.id);
    return isExists !== undefined;
  }, [imageLikes, props]);

  const onClick = useCallback(() => {
    setSelectedPhoto(props);
  }, [props]);

  const onToggleLike = useCallback(
    (e: any) => {
      e.stopPropagation();
      addImageLikes(props);
    },
    [props]
  );

  return (
    <div
      onClick={onClick}
      className="h-40 overflow-hidden transition-transform hover:shadow-md rounded-md group cursor-pointer hover:scale-[120%] relative"
    >
      <div className="hidden absolute w-full h-5 bg-black  bg-opacity-40 group-hover:flex place-items-center justify-center">
        <LoveIcon
          onClick={onToggleLike}
          className={`w-5 h-5 cursor-pointer ${
            isLiked ? "text-red-500" : " text-white"
          }`}
        />
      </div>
      <ImagePreloader
        src={props.urls.small}
        alt={props.alt_description || ""}
        blurHash={props.blur_hash || ""}
      />
    </div>
  );
};

export default ImageThumbnail;
