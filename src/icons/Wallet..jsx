import * as React from "react";
const SvgWallet = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 9a1 1 0 1 0 2 0h-2ZM6 6h12V4H6v2Zm12 12H6v2h12v-2ZM5 17V7H3v10h2ZM19 7v2h2V7h-2Zm0 8v2h2v-2h-2ZM6 18a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3v-2Zm12 2a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm0-14a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2ZM6 4a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V4Z"
      fill="#7B8896"
    />
    <path
      d="M13 12a3 3 0 0 1 3-3h6v6h-6a3 3 0 0 1-3-3Z"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M16.5 12h.5"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgWallet;
