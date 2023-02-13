import * as React from "react";
const SvgCrypto = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={9} stroke="#7B8896" strokeWidth={2} />
    <path
      d="M13.77 10.417a1 1 0 1 0 1.49-1.334l-1.49 1.334Zm1.49 4.5a1 1 0 1 0-1.49-1.334l1.49 1.334ZM12 14.375A2.375 2.375 0 0 1 9.625 12h-2A4.375 4.375 0 0 0 12 16.375v-2ZM9.625 12A2.375 2.375 0 0 1 12 9.625v-2A4.375 4.375 0 0 0 7.625 12h2ZM12 9.625c.703 0 1.334.304 1.77.792l1.49-1.334A4.367 4.367 0 0 0 12 7.625v2Zm1.77 3.958a2.367 2.367 0 0 1-1.77.792v2a4.367 4.367 0 0 0 3.26-1.458l-1.49-1.334Z"
      fill="#7B8896"
    />
    <path
      d="M10.618 16.75a1 1 0 1 0 2 0h-2Zm2.264-10a1 1 0 1 0-2 0h2Zm-2.264 8.625v1.375h2v-1.375h-2Zm2.264-7.449V6.75h-2v1.176h2Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgCrypto;
