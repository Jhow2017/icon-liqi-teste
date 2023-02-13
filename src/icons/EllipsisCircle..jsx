import * as React from "react";
const SvgEllipsisCircle = (props) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm7.6-10a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5.6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgEllipsisCircle;
