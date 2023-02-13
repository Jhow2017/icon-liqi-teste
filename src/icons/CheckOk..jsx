import * as React from "react";
const SvgCheckOk = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={8} stroke="#7B8896" strokeWidth={2} />
    <path
      d="M8.675 11.267a1 1 0 0 0-1.35 1.476l1.35-1.476Zm1.83 3.029-.674.738a1 1 0 0 0 1.353-.004l-.678-.734Zm5.332-3.561a1 1 0 0 0-1.356-1.47l1.356 1.47Zm-8.512 2.008 2.506 2.29 1.35-1.476-2.506-2.29-1.35 1.476Zm3.859 2.287 4.653-4.295-1.356-1.47-4.654 4.296 1.357 1.47Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgCheckOk;
