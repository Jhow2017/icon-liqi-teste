import * as React from "react";
const SvgVideo = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.325 6A.329.329 0 0 0 4 6.333v12.334c0 .088.034.173.095.235a.32.32 0 0 0 .23.098h15.353a.329.329 0 0 0 .322-.333V6.333A.329.329 0 0 0 19.678 6H4.325Z"
      stroke="#7B8896"
      strokeWidth={2}
    />
    <path
      d="m10.071 10.071 4.359 2.359-4.34 2.48-.019-4.839Z"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgVideo;
