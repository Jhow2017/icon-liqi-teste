import * as React from "react";
const SvgAlert = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={8} stroke="#7B8896" strokeWidth={2} />
    <path
      d="M12 16.33v-.03"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M12 7.67v5.8"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgAlert;
