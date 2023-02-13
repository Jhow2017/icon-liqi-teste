import * as React from "react";
const SvgSearch = (props) => (
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
      d="M11 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
      fill="#7B8896"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m17.707 20.12-3.414-3.413 1.414-1.414 3.414 3.414a1 1 0 0 1-1.414 1.414Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgSearch;
