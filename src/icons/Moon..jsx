import * as React from "react";
const SvgMoon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 12a10 10 0 0 0 13 9.54 10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"
      fill="#7B8896"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMoon;
