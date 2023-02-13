import * as React from "react";
const SvgUnderline = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 7.75C15 6.231 13.657 5 12 5S9 6.231 9 7.75s1 1.833 3 2.75 3 1.231 3 2.75S13.657 16 12 16s-3-1.231-3-2.75M7 19h10"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgUnderline;
