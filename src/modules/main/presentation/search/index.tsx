import React, { useCallback, useEffect, useRef, useState } from "react";
import useStore from "modules/main/infrastructure/store";
import useQuery from "hooks/useQuery";
import Layout from "modules/main/components/Layout";
import Page from "./components/Page";
import useOnScreen from "hooks/useOnScreen";

const Search = () => {
  const {
    searchKeyword,
    setSearchKeyword,
    setIsColorParamEnabled,
    setIsSortByParamEnabled,
    resetParam,

    colorParam,
    orientationParam,
    sortByParam,
  } = useStore((state) => state);
  const query = useQuery();
  const [page, setPage] = useState(1);
  const loadMoreButton = useRef<HTMLButtonElement>(null);

  const isLoadMoreButtonVisible = useOnScreen(loadMoreButton, "200px");

  const [isNotFound, setIsNotFound] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSearchKeyword(query.get("q") || "");
  }, [query.get("q")]);

  useEffect(() => {
    resetParam();
    setIsColorParamEnabled(true);
    setIsSortByParamEnabled(true);

    return () => {
      resetParam();
      setIsColorParamEnabled(false);
      setIsSortByParamEnabled(false);
    };
  }, []);

  /**
   * reset page to 1 if parameter change
   */
  useEffect(() => {
    setPage(1);
  }, [colorParam, orientationParam, sortByParam]);

  const addMorePage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const onCheckTotal = useCallback((total: number) => {
    setIsLoading(false);
    setIsNotFound(total < 1);
  }, []);

  const renderPages = useCallback(() => {
    const allPages = [];

    for (let index = 0; index < page; index++) {
      allPages.push(
        <Page
          onTotalResults={index > 0 ? undefined : onCheckTotal}
          key={index}
          page={index + 1}
        />
      );
    }
    return allPages;
  }, [page]);

  useEffect(() => {
    if (!isLoadMoreButtonVisible || isNotFound) return;
    addMorePage();
  }, [isLoadMoreButtonVisible, isNotFound]);

  return (
    <Layout>
      <div className="mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 ">
          {renderPages()}
        </div>
        <div className="p-10 text-center">
          {isNotFound && !isLoading && (
            <div className="p-5 rounded-md border border-gray-300 mb-10">
              No result about "{searchKeyword}"
            </div>
          )}
          <button
            disabled={isNotFound}
            ref={loadMoreButton}
            onClick={addMorePage}
            className="bg-green-500 disabled:opacity-20  rounded-full text-white py-3 px-7"
          >
            Load more photos about "{searchKeyword}"
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
