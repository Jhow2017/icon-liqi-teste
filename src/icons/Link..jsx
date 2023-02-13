import * as React from "react";
const SvgLink = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15.314 9.929-5.657 5.657M8.95 12.05 6.12 14.88a3 3 0 0 0 0 4.242v0a3 3 0 0 0 4.243 0l2.828-2.828M16.02 13.464l2.83-2.828a3 3 0 0 0 0-4.243v0a3 3 0 0 0-4.243 0l-2.829 2.829"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLink;
