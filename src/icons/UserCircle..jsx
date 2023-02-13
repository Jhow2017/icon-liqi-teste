import * as React from "react";
const SvgUserCircle = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="#7B8896" strokeWidth={2} />
    <circle cx={12} cy={9} r={3} stroke="#7B8896" strokeWidth={2} />
    <path
      d="M17 20a1 1 0 1 0 2 0h-2ZM5 20a1 1 0 1 0 2 0H5Zm5-4h4v-2h-4v2Zm7 3v1h2v-1h-2ZM7 20v-1H5v1h2Zm7-4a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Zm-4-2a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgUserCircle;
