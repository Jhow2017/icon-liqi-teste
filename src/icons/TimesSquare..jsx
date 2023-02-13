import * as React from "react";
const SvgTimesSquare = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3.5a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-17Zm17.56 2.94a1.5 1.5 0 0 1 0 2.12l-3.689 3.69 3.69 3.69a1.5 1.5 0 0 1-2.122 2.12l-3.689-3.689-3.69 3.69a1.5 1.5 0 0 1-2.12-2.122l3.689-3.689-3.69-3.69a1.5 1.5 0 1 1 2.122-2.12l3.689 3.689 3.69-3.69a1.5 1.5 0 0 1 2.12 0Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgTimesSquare;
