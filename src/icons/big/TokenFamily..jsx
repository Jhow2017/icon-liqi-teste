import * as React from "react";
const SvgTokenFamily = (props) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M42 13.5v21l-18 9-18-9v-21M24 42.75V22.5M33 39V18M15 39V18"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m6 24 18 9 18-9M6 13.5l18 9 18-9M42 13.5l-18-9-18 9M33 9l-18 9M15 9l18 9"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgTokenFamily;
