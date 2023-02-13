import * as React from "react";
const SvgArrowToBottom = (props) => (
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
      d="M12 5a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Z"
      fill="#7B8896"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.707 10.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0Z"
      fill="#7B8896"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.293 10.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414ZM3 19a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgArrowToBottom;
