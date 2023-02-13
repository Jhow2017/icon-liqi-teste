import * as React from "react";
const SvgSave = (props) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.076 5v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.414a1 1 0 0 0-.293-.707l-2.414-2.414A1 1 0 0 0 16.662 4H5.076a1 1 0 0 0-1 1Z"
      stroke="#7B8896"
      strokeWidth={2}
    />
    <path
      d="M8.076 19v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6M8.076 5v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5"
      stroke="#7B8896"
      strokeWidth={2}
    />
  </svg>
);
export default SvgSave;
