import * as React from "react";
const SvgCommentDots = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={8.538}
      cy={10.913}
      r={0.5}
      transform="rotate(45 8.538 10.913)"
      fill="#7B8896"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <circle
      cx={12.538}
      cy={10.913}
      r={0.5}
      transform="rotate(45 12.538 10.913)"
      fill="#7B8896"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <circle
      cx={16.538}
      cy={10.913}
      r={0.5}
      transform="rotate(45 16.538 10.913)"
      fill="#7B8896"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M4 5.206a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3v3.5l-6.5-3.5H5a1 1 0 0 1-1-1v-11Z"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCommentDots;
