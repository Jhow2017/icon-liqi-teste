import * as React from "react";
const SvgCube = (props) => (
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
      d="M13 11.618v7.764l6-3V8.618l-6 3Zm-.588 10.293.04-.018 7.995-3.998A1 1 0 0 0 21 17V6.998c0-.024 0-.048-.003-.071a1 1 0 0 0-.554-.824l-8.096-4a1 1 0 0 0-.895.005l-7.904 4A1 1 0 0 0 3 7.002V17a1 1 0 0 0 .553.895l7.996 3.998M11 19.382v-7.764l-6-3v7.764l6 3Zm.553 2.512a1 1 0 0 0 .859.017l-.86-.017Zm.356-17.776L6.225 6.995 12 9.882l5.753-2.877-5.844-2.887Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgCube;
