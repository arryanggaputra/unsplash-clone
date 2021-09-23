import React, { useMemo } from "react";
import { getPhotos } from "modules/infrastructure/http/collections";
import {
  CollectionsPhotosParams,
  Orientation,
} from "modules/infrastructure/types";
import useSWR from "swr";
import ImageThumbnail from "modules/main/components/ImageThumbnail";
import useStore from "modules/infrastructure/store";

const collectionId = "2081954";

interface IPage {
  page: number;
}
const Page: React.FC<IPage> = (props) => {
  const { page } = props;
  const { orientationParam } = useStore((state) => state);

  const collectionParameter: CollectionsPhotosParams = useMemo(
    () => ({
      collectionId,
      page,
      per_page: 30,
      ...(orientationParam && { orientation: orientationParam as Orientation }),
    }),
    [orientationParam]
  );

  const { data: collectionImages } = useSWR([collectionParameter], getPhotos);

  return (
    <>
      {collectionImages?.data?.map((item) => {
        return <ImageThumbnail key={item.id} {...item} />;
      })}
    </>
  );
};

export default Page;
