import React, { useCallback, useEffect, useRef } from "react";
import useStore from "modules/infrastructure/store";
import { useHistory } from "react-router";

const SearchBar: React.FC<{}> = () => {
  const { searchKeyword, setSearchKeyword } = useStore((state) => state);
  const history = useHistory();
  const searchInput = useRef<HTMLInputElement>(null);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        let keyword = searchInput.current?.value || "";

        setSearchKeyword(keyword);

        history.push(`/search?q=` + keyword);
      }
    },
    [history, searchInput]
  );

  return (
    <div className="mx-auto flex flex-row gap-4">
      <div className="relative flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute top-3 left-3 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          className="border border-gray-200 p-3 w-full rounded-full bg-gray-200 focus:outline-none hover:bg-white focus:bg-white px-10"
          ref={searchInput}
          placeholder="Search Photos"
          onKeyDown={onKeyDown}
          defaultValue={searchKeyword}
        />
      </div>
      <button className=" bg-green-500 px-5 sm:px-10 rounded-full border border-green-600 text-white">
        <span className="sm:block hidden">Filters</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:hidden block"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
