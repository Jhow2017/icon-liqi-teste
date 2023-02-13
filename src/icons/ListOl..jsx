import * as React from "react";
const SvgListOl = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 15.5h2V17H5.5M5 18.5h2V17"
      stroke="#7B8896"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 7.5h9M10.5 12.5h9M10.5 17.5h9"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.646 5.646a.5.5 0 1 0 .708.708l-.708-.708ZM6 5h.5a.5.5 0 0 0-.854-.354L6 5Zm-.5 3.5a.5.5 0 0 0 1 0h-1Zm-.146-2.146 1-1-.708-.708-1 1 .708.708ZM5.5 5v3.5h1V5h-1ZM5 10a.5.5 0 0 0 0 1v-1Zm0 3.5-.354-.354A.5.5 0 0 0 5 14v-.5Zm2 .5a.5.5 0 0 0 0-1v1Zm-2-3h1.293v-1H5v1Zm0 3h2v-1H5v1Zm1.44-2.646-1.794 1.792.708.708 1.792-1.793-.707-.707Zm.06-.147a.207.207 0 0 1-.06.147l.706.707c.227-.227.354-.534.354-.854h-1ZM6.293 11c.114 0 .207.093.207.207h1C7.5 10.54 6.96 10 6.293 10v1Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgListOl;
