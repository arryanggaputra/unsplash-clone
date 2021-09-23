import { getPhotos } from "modules/main/infrastructure/http/search";
import useStore from "modules/main/infrastructure/store";
import {
  Color,
  OrderBy,
  Orientation,
  SearchPhotosParams,
} from "modules/main/infrastructure/types";
import ImageThumbnail from "modules/main/components/ImageThumbnail";
import React, { useEffect, useMemo } from "react";
import useSWR from "swr";

interface IPage {
  page: number;
  onTotalResults?: (total: number) => void;
}
const Page: React.FC<IPage> = (props) => {
  const { page, onTotalResults } = props;

  const { searchKeyword, orientationParam, colorParam, sortByParam } = useStore(
    (state) => state
  );

  const collectionParameter: SearchPhotosParams = useMemo(
    () => ({
      query: searchKeyword,
      page,
      per_page: 30,
      ...(orientationParam && { orientation: orientationParam as Orientation }),
      ...(colorParam && { color: colorParam as Color }),
      ...(sortByParam && { order_by: sortByParam as OrderBy }),
    }),
    [searchKeyword, page, orientationParam, colorParam, sortByParam]
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
