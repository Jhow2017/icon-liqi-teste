import * as React from "react";
const SvgBullet = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={5.5} cy={7.5} r={1.5} fill="#7B8896" />
    <path
      d="M10 7.5h9"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={5.5} cy={12.5} r={1.5} fill="#7B8896" />
    <path
      d="M10 12.5h9"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={5.5} cy={17.5} r={1.5} fill="#7B8896" />
    <path
      d="M10 17.5h9"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgBullet;
