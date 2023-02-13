import * as React from "react";
const SvgCamera = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 8.014V8"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <rect
      x={3}
      y={5.206}
      width={18}
      height={14}
      rx={3}
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <circle cx={12} cy={12.206} r={3} stroke="#7B8896" strokeWidth={2} />
  </svg>
);
export default SvgCamera;
