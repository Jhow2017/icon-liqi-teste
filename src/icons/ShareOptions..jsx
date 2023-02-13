import * as React from "react";
const SvgShareOptions = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m16 7-9 5 9 5"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={15.5}
      cy={6.706}
      r={2.5}
      fill="#7B8896"
      stroke="#7B8896"
      strokeWidth={2}
    />
    <circle
      cx={15.5}
      cy={16.706}
      r={2.5}
      fill="#7B8896"
      stroke="#7B8896"
      strokeWidth={2}
    />
    <circle
      cx={6.5}
      cy={11.706}
      r={2.5}
      fill="#7B8896"
      stroke="#7B8896"
      strokeWidth={2}
    />
  </svg>
);
export default SvgShareOptions;
