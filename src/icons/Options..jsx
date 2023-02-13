import * as React from "react";
const SvgOptions = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={11.5} cy={7.5} r={1.5} fill="#7B8896" />
    <circle cx={11.5} cy={12.5} r={1.5} fill="#7B8896" />
    <circle cx={11.5} cy={17.5} r={1.5} fill="#7B8896" />
  </svg>
);
export default SvgOptions;