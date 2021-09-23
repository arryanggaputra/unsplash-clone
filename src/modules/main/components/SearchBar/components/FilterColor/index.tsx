import React, { useCallback } from "react";
import useStore from "modules/main/infrastructure/store";
import { Color } from "modules/main/infrastructure/types";
import FilterRadio from "../FilterRadio";

const FilterColor: React.FC<{}> = () => {
  const { colorParam, setColorParam, isColorParamEnabled } = useStore(
    (state) => state
  );

  const renderOptions = useCallback(() => {
    let components = [];
    components.push(
      <FilterRadio
        value={""}
        label={"All Color"}
        name="colorParam"
        checked={colorParam === ""}
        onChange={(e) => {
          setColorParam(e.target.value);
        }}
      />
    );
    for (const color in Color) {
      components.push(
        <FilterRadio
          key={color}
          value={color}
          label={color}
          name="colorParam"
          checked={colorParam === color}
          onChange={(e) => {
            setColorParam(e.target.value);
          }}
        />
      );
    }
    return components;
  }, [colorParam]);

  return (
    <>
      {isColorParamEnabled && (
        <div>
          <h3 className="font-bold text-xl mb-5">Color</h3>
          <div className="grid grid-cols-2 md:grid-cols-1">
            {renderOptions()}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterColor;
