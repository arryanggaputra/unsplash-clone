import { getPhotos } from "modules/infrastructure/http/search";
import useStore from "modules/infrastructure/store";
import { SearchPhotosParams } from "modules/infrastructure/types";
import ImageThumbnail from "modules/main/components/ImageThumbnail";
import React, { useMemo } from "react";
import useSWR from "swr";

interface IPage {
  page: number;
}
const Page: React.FC<IPage> = (props) => {
  const { page } = props;

  const { searchKeyword } = useStore((state) => state);

  const collectionParameter: SearchPhotosParams = useMemo(
    () => ({
      query: searchKeyword,
      page,
      per_page: 12,
    }),
    [searchKeyword, page]
  );

  const { data: collectionImages } = useSWR(
    !searchKeyword ? null : [collectionParameter],
    getPhotos
  );

  return (
    <>
      {collectionImages?.data.results.map((item) => {
        return <ImageThumbnail key={item.id} {...item} />;
      })}
    </>
  );
};

export default Page;
