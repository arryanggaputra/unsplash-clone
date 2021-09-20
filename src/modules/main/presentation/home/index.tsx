import React, { useMemo, useState } from "react";
import { getPhotos } from "modules/infrastructure/http/collections";
import { CollectionsPhotosParams } from "modules/infrastructure/types";
import useSWR from "swr";
import ImageThumbnail from "modules/main/components/ImageThumbnail";
import Layout from "modules/main/components/Layout";

const collectionId = "2423569";

const Home: React.FC<{}> = () => {
  const [page, setPage] = useState(1);

  const collectionParameter: CollectionsPhotosParams = useMemo(
    () => ({
      collectionId,
      page,
      per_page: 20,
    }),
    []
  );

  const { data: collectionImages } = useSWR([collectionParameter], getPhotos);

  return (
    <Layout>
      <div className="mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 ">
          {collectionImages?.data?.map((item) => {
            return <ImageThumbnail key={item.id} {...item} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
