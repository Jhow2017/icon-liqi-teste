import * as React from "react";
const SvgArrowExpand = (props) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 15v5h5M4.386 19.78 10 14M20.083 9V4h-5M19.697 4.22 14.083 10"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgArrowExpand;
