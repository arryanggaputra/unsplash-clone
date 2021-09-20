import { getPhotos } from "modules/infrastructure/http/search";
import useStore from "modules/infrastructure/store";
import { SearchPhotosParams } from "modules/infrastructure/types";
import ImageThumbnail from "modules/main/components/ImageThumbnail";
import React, { useEffect, useMemo } from "react";
import useSWR from "swr";

interface IPage {
  page: number;
  onTotalResults?: (total: number) => void;
}
const Page: React.FC<IPage> = (props) => {
  const { page, onTotalResults } = props;

  const { searchKeyword } = useStore((state) => state);

  const collectionParameter: SearchPhotosParams = useMemo(
    () => ({
      query: searchKeyword,
      page,
      per_page: 30,
    }),
    [searchKeyword, page]
  );

  const { data: collectionImages } = useSWR(
    !searchKeyword ? null : [collectionParameter],
    getPhotos
  );

  useEffect(() => {
    if (collectionImages?.data) {
      onTotalResults?.(collectionImages?.data.total || 0);
    }
  }, [collectionImages?.data.total]);

  return (
    <>
      {collectionImages?.data.results.map((item) => {
        return <ImageThumbnail key={item.id} {...item} />;
      })}
    </>
  );
};

export default Page;
