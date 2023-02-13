import * as React from "react";
const SvgBell = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 14.5c0 1.5.5 3 2 3.5H4c1.5-.5 2-2 2-3.5V11c0-2.5 1.5-5 6-5s6 2.5 6 5v3.5Z"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 4a1 1 0 1 0-2 0v2h2V4ZM12 22c2 0 2-1 2-1h-4s0 1 2 1Z"
      fill="#7B8896"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgBell;
