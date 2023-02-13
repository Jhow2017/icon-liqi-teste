import * as React from "react";
const SvgTimesCircle = (props) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-5.881-4.119a1.111 1.111 0 0 1 0 1.571L13.571 12l2.548 2.548a1.111 1.111 0 0 1-1.571 1.571L12 13.571 9.452 16.12a1.111 1.111 0 0 1-1.571-1.571L10.429 12 7.88 9.452a1.111 1.111 0 0 1 1.571-1.571L12 10.429l2.548-2.548a1.111 1.111 0 0 1 1.571 0Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgTimesCircle;
