import * as React from "react";
const SvgUserPlus = (props) => (
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
      d="M13 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z"
      fill="#7B8896"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 17a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1Z"
      fill="#7B8896"
    />
    <path
      d="M3 18a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1H3v-1Z"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <circle cx={9} cy={8} r={3} stroke="#7B8896" strokeWidth={2} />
  </svg>
);
export default SvgUserPlus;
