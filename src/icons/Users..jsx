import * as React from "react";
const SvgUsers = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={6.8} cy={6.667} r={2.667} stroke="#7B8896" strokeWidth={2} />
    <path
      d="m2 16.267-.962-.275A1 1 0 0 0 2 17.267v-1Zm5.867 1a1 1 0 0 0 0-2v2Zm1.845-3.368a1 1 0 1 0 1.11-1.664l-1.11 1.664Zm-4.382-.366H8.86v-2H5.33v2Zm-2.368 3.008.445-1.557-1.924-.55-.445 1.558 1.924.55Zm4.905-1.274H2v2h5.867v-2ZM9.416 13.7l.296.198 1.11-1.664-.297-.198-1.11 1.664Zm-.555-.168a1 1 0 0 1 .555.168l1.11-1.664a3 3 0 0 0-1.665-.504v2Zm-3.531-2a4 4 0 0 0-3.847 2.901l1.924.55a2 2 0 0 1 1.923-1.45v-2Z"
      fill="#7B8896"
    />
    <path
      d="M10 19a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1H10v-1Z"
      stroke="#7B8896"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <circle cx={16} cy={9} r={3} stroke="#7B8896" strokeWidth={2} />
  </svg>
);
export default SvgUsers;
