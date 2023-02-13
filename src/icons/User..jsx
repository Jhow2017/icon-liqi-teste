import * as React from "react";
const SvgUser = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 18a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1H6v-1Z"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <circle cx={12} cy={8} r={3} stroke="#7B8896" strokeWidth={2} />
  </svg>
);
export default SvgUser;
