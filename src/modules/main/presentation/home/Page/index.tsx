import React, { useCallback, useEffect, useMemo } from "react";
import { getPhotos } from "modules/main/infrastructure/http/collections";
import {
  CollectionsPhotosParams,
  Orientation,
} from "modules/main/infrastructure/types";
import useSWR from "swr";
import ImageThumbnail from "modules/main/components/ImageThumbnail";
import useStore from "modules/main/infrastructure/store";

const collectionId = "2081954";
const PER_PAGE = 30;

interface IPage {
  page: number;
  onTotalResult: (total: number) => void;
}
const Page: React.FC<IPage> = (props) => {
  const { page } = props;
  const { orientationParam } = useStore((state) => state);

  const collectionParameter: CollectionsPhotosParams = useMemo(
    () => ({
      collectionId,
      page,
      per_page: PER_PAGE,
      ...(orientationParam && { orientation: orientationParam as Orientation }),
    }),
    [orientationParam]
  );

  const { data: collectionImages, isValidating } = useSWR(
    [collectionParameter],
    getPhotos
  );

  useEffect(() => {
    if (isValidating) return;
    props.onTotalResult(collectionImages?.data.length || 0);
  }, [collectionImages?.data, isValidating]);

  return (
    <>
      {collectionImages !== undefined &&
        collectionImages?.data?.map((item) => {
          return <ImageThumbnail key={item.id} {...item} />;
        })}
    </>
  );
};

export default Page;
