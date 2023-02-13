import * as React from "react";
const SvgPicture = (props) => (
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
      d="M6.484 19h11.03a.48.48 0 0 0 .432-.233.407.407 0 0 0-.038-.46l-1.521-1.903a.496.496 0 0 0-.712-.057L14.11 17.72l-3.63-4.542a.487.487 0 0 0-.393-.177.482.482 0 0 0-.382.198l-3.63 5.13a.406.406 0 0 0-.016.45.48.48 0 0 0 .424.222Z"
      fill="#7B8896"
      stroke="#7B8896"
      strokeWidth={2}
    />
    <ellipse cx={15.769} cy={10.78} rx={1.769} ry={1.78} fill="#7B8896" />
  </svg>
);
export default SvgPicture;
