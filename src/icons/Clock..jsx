import * as React from "react";
const SvgClock = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={8} stroke="#7B8896" strokeWidth={2} />
    <path
      d="M13 8a1 1 0 1 0-2 0h2Zm-1 4h-1a1 1 0 0 0 .445.832L12 12Zm2.445 2.832a1 1 0 0 0 1.11-1.664l-1.11 1.664ZM11 8v4h2V8h-2Zm.445 4.832 3 2 1.11-1.664-3-2-1.11 1.664Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgClock;
