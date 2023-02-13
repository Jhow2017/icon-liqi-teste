import * as React from "react";
const SvgInformation = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={8} stroke="#7B8896" strokeWidth={2} />
    <path
      d="M12 8.27v.03"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M12 15.8v-4.4"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgInformation;
