import * as React from "react";
const SvgMegaphone = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 11.313c0-1.14.923-2.063 2.063-2.063h5.562v4.125H4.062A2.062 2.062 0 0 1 2 11.312ZM7.005 20.375c-.61 0-1.135-.434-1.25-1.034L4.834 14.5h2.59l.831 4.365c.15.784-.451 1.51-1.25 1.51ZM9.875 13.707V8.918l5-3.878v12.543l-5-3.877Z"
      stroke="#7B8896"
      strokeWidth={2}
    />
    <path
      d="M19.375 11.75H22M19.375 8.25 22 6.5M19.375 15.25 22 17"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgMegaphone;
