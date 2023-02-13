import * as React from "react";
const SvgStarOutline = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m12 4 2.645 5.36 5.915.859-4.28 4.172 1.01 5.89L12 17.5l-5.29 2.781 1.01-5.89-4.28-4.172 5.915-.86L12 4Z"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgStarOutline;
