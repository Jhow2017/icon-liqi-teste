import * as React from "react";
const SvgBank = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 20.206h16M6 16.706v-4.5M12 16.706v-4.5M18 16.706v-4.5"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 2.455c.536-.323 1.473-.342 2 0l7.54 5.052c.806.523.486 1.948-.438 1.948H3.898c-.939 0-1.246-1.463-.413-1.964L11 2.455Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgBank;
