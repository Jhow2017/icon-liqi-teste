import * as React from "react";
const SvgClose = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m6 6 12 12M6 18 18 6"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgClose;
