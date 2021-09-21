import React, { useCallback, useEffect, useRef, useState } from "react";

import Layout from "modules/main/components/Layout";
import Page from "./Page";
import useOnScreen from "hooks/useOnScreen";

const Home: React.FC<{}> = () => {
  const [page, setPage] = useState(1);

  const loadMoreButton = useRef<HTMLButtonElement>(null);

  const isLoadMoreButtonVisible = useOnScreen(loadMoreButton, "200px");

  const addMorePage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const allPages = [];

  for (let index = 0; index < page; index++) {
    allPages.push(<Page key={index} page={index + 1} />);
  }

  useEffect(() => {
    if (!isLoadMoreButtonVisible) return;
    addMorePage();
  }, [isLoadMoreButtonVisible]);

  return (
    <Layout>
      <div className="mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 ">
          {allPages}
        </div>
        <div className="p-10 text-center">
          <button
            ref={loadMoreButton}
            onClick={addMorePage}
            className="bg-green-500 disabled:opacity-20  rounded-full text-white py-3 px-7"
          >
            Load more photos
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
