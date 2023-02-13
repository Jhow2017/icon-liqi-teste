import * as React from "react";
const SvgMail = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
      stroke="#7B8896"
      strokeWidth={2}
    />
    <path
      d="m4 6 6.586 6.586a2 2 0 0 0 2.828 0L20 6M20 17l-5.5-5.5M4 17l5.5-5.5"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgMail;
