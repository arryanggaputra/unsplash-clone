import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useStore from "modules/infrastructure/store";
import useQuery from "hooks/useQuery";
import Layout from "modules/main/components/Layout";
import Page from "./components/Page";
import useOnScreen from "hooks/useOnScreen";

const Search = () => {
  const { searchKeyword, setSearchKeyword } = useStore((state) => state);
  const query = useQuery();
  const [page, setPage] = useState(1);
  const loadMoreButton = useRef<HTMLButtonElement>(null);

  const isLoadMoreButtonVisible = useOnScreen(loadMoreButton, "200px");

  useEffect(() => {
    if (searchKeyword) return;
    setSearchKeyword(query.get("q") || "");
  }, [searchKeyword, query]);

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
            className="bg-green-500 rounded-full text-white py-3 px-7"
          >
            Load more photos about "{searchKeyword}"
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
