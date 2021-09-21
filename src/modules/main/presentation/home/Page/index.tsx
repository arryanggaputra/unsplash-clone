import React, { useMemo } from "react";
import { getPhotos } from "modules/infrastructure/http/collections";
import { CollectionsPhotosParams } from "modules/infrastructure/types";
import useSWR from "swr";
import ImageThumbnail from "modules/main/components/ImageThumbnail";

const collectionId = "2081954";

interface IPage {
  page: number;
}
const Page: React.FC<IPage> = (props) => {
  const { page } = props;

  const collectionParameter: CollectionsPhotosParams = useMemo(
    () => ({
      collectionId,
      page,
      per_page: 30,
    }),
    []
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
