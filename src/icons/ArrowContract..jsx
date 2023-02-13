import * as React from "react";
const SvgArrowContract = (props) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 5v5h5M14.386 9.78 20 4M10.083 19v-5h-5M9.697 14.22 4.083 20"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgArrowContract;
