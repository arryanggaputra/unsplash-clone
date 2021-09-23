import React, { useCallback } from "react";
import useStore from "modules/infrastructure/store";
import { OrderBy } from "modules/infrastructure/types";
import FilterRadio from "../FilterRadio";

const FilterSortBy: React.FC<{}> = () => {
  const { sortByParam, setSortByParam, isSortByParamEnabled } = useStore(
    (state) => state
  );

  const renderOptions = useCallback(() => {
    console.log({ sortByParam });
    let components = [];
    components.push(
      <FilterRadio
        value={""}
        label={"All"}
        name="sortByParam"
        checked={sortByParam === ""}
        onChange={(e) => {
          setSortByParam(e.target.value);
        }}
      />
    );

    let SortBy = [OrderBy.latest, OrderBy.relevant];
    SortBy.forEach((sortBy) => {
      components.push(
        <FilterRadio
          key={sortBy}
          value={sortBy}
          label={sortBy}
          name="sortByParam"
          checked={sortByParam === sortBy}
          onChange={(e) => {
            setSortByParam(e.target.value);
          }}
        />
      );
    });

    return components;
  }, [sortByParam]);

  return (
    <>
      {isSortByParamEnabled && (
        <div>
          <h3 className="font-bold text-xl mb-5">Sort By</h3>
          {renderOptions()}
        </div>
      )}
    </>
  );
};

export default FilterSortBy;
