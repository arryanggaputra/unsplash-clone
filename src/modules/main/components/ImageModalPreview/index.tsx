import React, { useCallback, useEffect, useMemo } from "react";
import useWindowSize from "hooks/useWindowSize";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import ImagePreloader from "../ImageLazyLoad";

interface IImageModalPreview {
  onClose?: () => void;
}

const IMAGE_WIDTH = 1080;

const ImageModalPreview: React.FC<Basic & IImageModalPreview> = (props) => {
  const [windowWidth] = useWindowSize();

  useEffect(() => {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.height = "auto";
      document.body.style.overflow = "scroll";
    };
  }, []);

  const defaultImageWidth = useMemo(
    () => (IMAGE_WIDTH < windowWidth ? IMAGE_WIDTH : windowWidth),
    [windowWidth]
  );

  const imageHeight = useMemo(() => {
    let height = props.height / (props.width / defaultImageWidth);
    return height;
  }, [props, defaultImageWidth]);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex overflow-y-auto min-h-screen pt-4 px-10 pb-20 text-center items-center justify-center lg:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div
          style={{
            width: defaultImageWidth,
            height: imageHeight,
          }}
          className="inline-block relative  my-20 rounded-lg text-left shadow-xl transform transition-all"
        >
          <span
            onClick={props.onClose}
            className="absolute z-30 top-[-20px] right-[-20px] p-3 rounded-full border border-white shadow-md cursor-pointer bg-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
          <ImagePreloader
            src={props.urls.regular}
            alt={props.alt_description || ""}
            blurHash={props.blur_hash || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModalPreview;
