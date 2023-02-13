import * as React from "react";
const SvgCopy = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.889 16.444h-4V4h9.778v3.111"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.333 7.556h9.778V20H9.333z"
    />
  </svg>
);
export default SvgCopy;
