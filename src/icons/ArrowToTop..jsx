import * as React from "react";
const SvgArrowToTop = (props) => (
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
      d="M12 19a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v9a1 1 0 0 1-1 1Z"
      fill="#7B8896"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.293 13.707a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0Z"
      fill="#7B8896"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.707 13.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414ZM21 5a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgArrowToTop;
