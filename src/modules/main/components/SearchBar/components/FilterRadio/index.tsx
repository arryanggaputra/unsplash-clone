import React, { InputHTMLAttributes } from "react";

const FilterRadio: React.FC<
  {
    value: string;
    label: string;
  } & InputHTMLAttributes<HTMLInputElement>
> = (props) => {
  const { value, label, ...rest } = props;
  return (
    <div>
      <label className="cursor-pointer" htmlFor={label}>
        <input
          id={label}
          type="radio"
          value={value}
          name="orientation"
          className="mr-3"
          {...rest}
        />
        {label}
      </label>
    </div>
  );
};

export default FilterRadio;
