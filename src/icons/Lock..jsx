import * as React from "react";
const SvgLock = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17 10V8A5 5 0 0 0 7 8v2" stroke="#7B8896" strokeWidth={2} />
    <rect
      x={5}
      y={11}
      width={14}
      height={10}
      rx={1}
      stroke="#7B8896"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.871 17.392c-.069-.45.2-.872.519-1.197a1.79 1.79 0 0 0 .523-1.258c0-1.027-.888-1.859-1.983-1.859-1.095 0-1.982.832-1.982 1.859 0 .485.198.927.523 1.258.32.325.587.747.519 1.197l-.074.483a1 1 0 0 0 .989 1.15h.051a1 1 0 0 0 .989-1.15l-.074-.483Z"
      fill="#7B8896"
    />
  </svg>
);
export default SvgLock;
