import * as React from "react";
const SvgCalendar = (props) => (
  <svg
    width={49}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={10.967}
      y={12.3}
      width={27.6}
      height={25.2}
      rx={1}
      stroke="url(#calendar_svg__a)"
      strokeWidth={2}
    />
    <path
      d="M17.142 9.15a1 1 0 1 0-2 0h2Zm-2 0v3.15h2V9.15h-2Z"
      fill="url(#calendar_svg__b)"
    />
    <path
      d="M34.392 9.15a1 1 0 1 0-2 0h2Zm-2 0v3.15h2V9.15h-2Z"
      fill="url(#calendar_svg__c)"
    />
    <path
      d="M10.967 18.6h27.6"
      stroke="url(#calendar_svg__d)"
      strokeWidth={2}
    />
    <mask id="calendar_svg__f" fill="#fff">
      <rect x={15.767} y={22.8} width={3.6} height={3.6} rx={1} />
    </mask>
    <rect
      x={15.767}
      y={22.8}
      width={3.6}
      height={3.6}
      rx={1}
      stroke="url(#calendar_svg__e)"
      strokeWidth={3.6}
      mask="url(#calendar_svg__f)"
    />
    <mask id="calendar_svg__i" fill="#fff">
      <rect x={22.967} y={22.8} width={3.6} height={3.6} rx={1} />
    </mask>
    <rect
      x={22.967}
      y={22.8}
      width={3.6}
      height={3.6}
      rx={1}
      fill="url(#calendar_svg__g)"
      stroke="url(#calendar_svg__h)"
      strokeWidth={3.6}
      mask="url(#calendar_svg__i)"
    />
    <mask id="calendar_svg__l" fill="#fff">
      <rect x={15.767} y={30} width={3.6} height={3.6} rx={1} />
    </mask>
    <rect
      x={15.767}
      y={30}
      width={3.6}
      height={3.6}
      rx={1}
      fill="url(#calendar_svg__j)"
      stroke="url(#calendar_svg__k)"
      strokeWidth={3.6}
      mask="url(#calendar_svg__l)"
    />
    <mask id="calendar_svg__n" fill="#fff">
      <rect x={22.967} y={30} width={3.6} height={3.6} rx={1} />
    </mask>
    <rect
      x={22.967}
      y={30}
      width={3.6}
      height={3.6}
      rx={1}
      stroke="url(#calendar_svg__m)"
      strokeWidth={3.6}
      mask="url(#calendar_svg__n)"
    />
    <mask id="calendar_svg__p" fill="#fff">
      <rect x={30.166} y={22.8} width={3.6} height={3.6} rx={1} />
    </mask>
    <rect
      x={30.166}
      y={22.8}
      width={3.6}
      height={3.6}
      rx={1}
      stroke="url(#calendar_svg__o)"
      strokeWidth={3.6}
      mask="url(#calendar_svg__p)"
    />
    <defs>
      <linearGradient
        id="calendar_svg__a"
        x1={24.767}
        y1={12.3}
        x2={24.767}
        y2={37.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#606D7F" />
        <stop offset={1} stopColor="#495565" />
      </linearGradient>
      <linearGradient
        id="calendar_svg__b"
        x1={16.642}
        y1={9.15}
        x2={16.642}
        y2={12.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#606D7F" />
        <stop offset={1} stopColor="#495565" />
      </linearGradient>
      <linearGradient
        id="calendar_svg__c"
        x1={33.892}
        y1={9.15}
        x2={33.892}
        y2={12.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#606D7F" />
        <stop offset={1} stopColor="#495565" />
      </linearGradient>
      <linearGradient
        id="calendar_svg__d"
        x1={24.767}
        y1={18.6}
        x2={24.767}
        y2={19.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#606D7F" />
        <stop offset={1} stopColor="#495565" />
      </linearGradient>
      <linearGradient
        id="calendar_svg__e"
        x1={17.567}
        y1={22.8}
        x2={17.567}
        y2={26.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#606D7F" />
        <stop offset={1} stopColor="#495565" />
      </linearGradient>
      <linearGradient
        id="calendar_svg__g"
        x1={24.767}
        y1={22.8}
        x2={24.767}
        y2={26.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#606D7F" />
        <stop offset={1} stopColor="#495565" />
      </linearGradient>
      <linearGradient
        id="calendar_svg__h"
        x1={24.767}
        y1={22.8}
        x2={24.767}
        y2={26.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#606D7F" />
        <stop offset={1} stopColor="#495565" />
      </linearGradient>
      <linearGradient
        id="calendar_svg__j"
        x1={17.567}
        y1={30}
        x2={17.567}
        y2={33.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#606D7F" />
        <stop offset={1} stopColor="#495565" />
      </linearGradient>
      <linearGradient
        id="calendar_svg__k"
        x1={17.567}
        y1={30}
        x2={17.567}
        y2={33.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#606D7F" />
        <stop offset={1} stopColor="#495565" />
      </linearGradient>
      <linearGradient
        id="calendar_svg__m"
        x1={24.767}
        y1={30}
        x2={24.767}
        y2={33.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#606D7F" />
        <stop offset={1} stopColor="#495565" />
      </linearGradient>
      <linearGradient
        id="calendar_svg__o"
        x1={31.966}
        y1={22.8}
        x2={31.966}
        y2={26.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#606D7F" />
        <stop offset={1} stopColor="#495565" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgCalendar;
