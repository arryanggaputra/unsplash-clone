import React, { useCallback } from "react";
import useStore from "modules/main/infrastructure/store";
import { Orientation } from "modules/main/infrastructure/types";
import FilterRadio from "../FilterRadio";

const FilterOrientation: React.FC<{}> = () => {
  const { orientationParam, setOrientationParam } = useStore((state) => state);

  const renderOptions = useCallback(() => {
    let components = [];
    components.push(
      <FilterRadio
        value={""}
        label={"All Orientation"}
        name="orientationParam"
        checked={orientationParam === ""}
        onChange={(e) => {
          setOrientationParam(e.target.value);
        }}
      />
    );
    for (const orientation in Orientation) {
      components.push(
        <FilterRadio
          name="orientationParam"
          key={orientation}
          value={orientation}
          label={orientation}
          checked={orientationParam === orientation}
          onChange={(e) => {
            setOrientationParam(e.target.value);
          }}
        />
      );
    }
    return components;
  }, [orientationParam]);

  return (
    <>
      <div>
        <h3 className="font-bold text-xl mb-5">Orientation</h3>
        <div className="grid grid-cols-2 md:grid-cols-1">{renderOptions()}</div>
      </div>
    </>
  );
};

export default FilterOrientation;
