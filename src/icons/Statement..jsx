import * as React from "react";
const SvgStatement = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 19.834c0 .925-1.147 1.354-1.754.657l-.558-.641a1 1 0 0 0-1.378-.125l-1.27 1.014a1 1 0 0 1-1.32-.062l-.941-.911a1 1 0 0 0-1.354-.034l-1.12.98a1 1 0 0 1-1.316 0l-1.086-.95a1 1 0 0 0-1.387.068l-.787.837c-.62.66-1.729.221-1.729-.685V4.506a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15.328Z"
      stroke="#7B8896"
      strokeWidth={2}
    />
    <path
      d="M11 15.006h5M8 15.006h.5M11 11.006h5M8 11.006h.5M11 7.006h5M8 7.006h.5"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgStatement;
