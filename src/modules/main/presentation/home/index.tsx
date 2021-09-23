import React, { useCallback, useEffect, useRef, useState } from "react";

import Layout from "modules/main/components/Layout";
import Page from "./Page";
import useOnScreen from "hooks/useOnScreen";
import useStore from "modules/main/infrastructure/store";

const Home: React.FC<{}> = () => {
  const [page, setPage] = useState(1);
  const { setSearchKeyword } = useStore((state) => state);
  const loadMoreButton = useRef<HTMLButtonElement>(null);
  const [isOnTheLastPage, setIsOnTheLastPage] = useState(false);

  useEffect(() => {
    setSearchKeyword("");
  }, []);

  const isLoadMoreButtonVisible = useOnScreen(loadMoreButton, "200px");

  const addMorePage = useCallback(() => {
    if (isOnTheLastPage) return;
    setPage(page + 1);
  }, [page, isOnTheLastPage]);

  const allPages = [];

  const onTotalResult = useCallback((total: number) => {
    setIsOnTheLastPage(total < 1);
  }, []);

  for (let index = 0; index < page; index++) {
    allPages.push(
      <Page key={index} page={index + 1} onTotalResult={onTotalResult} />
    );
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
