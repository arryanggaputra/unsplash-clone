import React, { useCallback, useMemo, useState } from "react";
import { Blurhash } from "react-blurhash";
import { Basic } from "unsplash-js/dist/methods/photos/types";

const ImageThumbnail: React.FC<Basic> = (props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const afterLoad = useCallback(() => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 1000);
  }, []);

  const placeholder = useMemo(() => {
    if (isImageLoaded) return <></>;
    return (
      <Blurhash
        hash={props.blur_hash || ""}
        width={"100%"}
        height={"100%"}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
    );
  }, [isImageLoaded, props.blur_hash]);

  return (
    <div className="h-40 overflow-hidden transition-transform hover:shadow-md rounded-md group cursor-pointer hover:scale-[120%]">
      {placeholder}
      <img
        src={props.urls.small}
        loading="lazy"
        alt={props.alt_description || ""}
        onLoad={afterLoad}
        className={`object-cover h-full w-full rounded-md ${
          !isImageLoaded ? "hidden" : ""
        }`}
      />
    </div>
  );
};

export default ImageThumbnail;
