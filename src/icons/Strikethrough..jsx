import * as React from "react";
const SvgStrikethrough = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 9h1.5a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H11V9ZM11 12h2.5a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H11v-3ZM4 15l2.5-6L9 15M21 9h-1a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h1M3 12h18"
      stroke="#7B8896"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgStrikethrough;
