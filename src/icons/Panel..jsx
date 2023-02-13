import * as React from "react";
const SvgPanel = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.924 7.206a1 1 0 0 1 1-1h3.538a1 1 0 0 1 1 1v4.666a1 1 0 0 1-1 1H6.925a1 1 0 0 1-1-1V7.206Zm6.462 5.333a1 1 0 0 1 1-1h3.538a1 1 0 0 1 1 1v4.667a1 1 0 0 1-1 1h-3.538a1 1 0 0 1-1-1v-4.667Zm-6.462 2.667a1 1 0 0 1 1-1h3.538a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6.925a1 1 0 0 1-1-1v-2Zm6.462-8a1 1 0 0 1 1-1h3.538a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.538a1 1 0 0 1-1-1v-2Z"
      fill="#7B8896"
    />
    <rect
      x={3}
      y={3.206}
      width={18}
      height={18}
      rx={2}
      stroke="#7B8896"
      strokeWidth={2}
    />
  </svg>
);
export default SvgPanel;
