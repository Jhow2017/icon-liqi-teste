import * as React from "react";
const SvgNews = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 15.222h1-1ZM5.882 5H17V3H5.882v2ZM19 7v12h2V7h-2Zm0 12H8.765v2H19v-2ZM8.765 19V5.883h-2V19h2Zm-1-3.778H5v2h2.765v-2Zm-2.765 0v-9.34H3v9.34h2Zm0-9.34C5 5.395 5.395 5 5.882 5V3A2.882 2.882 0 0 0 3 5.882h2Zm3.765 0A2.883 2.883 0 0 0 5.882 3v2c.488 0 .883.395.883.883h2ZM17 5a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2ZM5 15.222H3a2 2 0 0 0 2 2v-2ZM8.765 19h-2a2 2 0 0 0 2 2v-2ZM19 19v2a2 2 0 0 0 2-2h-2Z"
      fill="#7B8896"
    />
    <path
      d="M11 8h6M11 12h6M11 16h6"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgNews;
