import React, { forwardRef } from "react";
import { ISvgProps } from "./Icon.type";

export const FlutterIcon = forwardRef<SVGSVGElement, ISvgProps>(
  function FlutterIcon({ className, ...props }, ref) {
    return (
      <svg
        className={className}
        {...props}
        ref={ref}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024.000000 486.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,486.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M4052 2398 l3 -783 70 0 70 0 3 372 2 373 373 2 372 3 0 60 0 60
-370 5 -370 5 -3 277 -2 278 417 2 418 3 3 63 3 62 -496 0 -495 0 2 -782z"
          />
          <path
            d="M5190 2400 l0 -780 23 -5 c13 -4 43 -5 68 -3 l44 3 3 783 2 782 -70
0 -70 0 0 -780z"
          />
          <path
            d="M6855 3080 c-3 -5 -5 -76 -5 -157 1 -82 1 -154 0 -160 0 -10 -26 -13
-95 -13 l-95 0 0 -60 0 -60 94 0 95 0 3 -447 c2 -376 5 -452 18 -473 51 -84
88 -100 235 -100 l115 0 0 59 0 60 -73 -1 c-80 -1 -108 9 -135 49 -15 25 -17
63 -17 438 l0 410 113 3 112 3 0 59 0 59 -112 3 -113 3 -3 168 -2 167 -65 0
c-35 0 -67 -4 -70 -10z"
          />
          <path
            d="M7495 3078 c-3 -7 -6 -83 -7 -168 l-3 -155 -92 -3 -93 -3 0 -59 0
-59 93 -3 92 -3 5 -445 5 -445 24 -42 c38 -66 84 -83 226 -83 l116 0 -3 58 -3
57 -70 1 c-38 1 -82 6 -97 12 -53 21 -53 24 -53 472 l0 415 113 3 112 3 0 59
0 59 -112 3 -113 3 -3 168 -2 167 -66 0 c-42 0 -66 -4 -69 -12z"
          />
          <path
            d="M8355 2761 c-88 -31 -128 -57 -186 -118 -103 -108 -148 -231 -156
-424 -13 -297 93 -512 293 -594 59 -25 86 -29 189 -33 139 -5 205 7 288 51 96
51 169 145 212 275 24 73 18 82 -54 82 l-60 0 -39 -82 c-72 -156 -170 -214
-341 -206 -71 3 -95 9 -140 33 -67 37 -126 103 -161 180 -30 67 -56 176 -47
199 6 14 60 16 434 18 l428 3 -3 95 c-8 269 -136 461 -351 526 -65 20 -243 17
-306 -5z m315 -137 c62 -34 120 -95 154 -163 27 -53 59 -169 50 -183 -6 -9
-707 -12 -716 -3 -9 9 18 110 45 169 43 94 144 185 230 207 18 5 67 7 109 5
60 -3 87 -10 128 -32z"
          />
          <path
            d="M9642 2759 c-112 -19 -234 -105 -282 -200 -11 -21 -25 -39 -30 -39
-6 0 -10 47 -10 115 l0 116 -62 -3 -63 -3 -3 -559 c-2 -441 0 -561 10 -568 15
-9 99 -11 122 -2 14 5 16 45 16 343 0 269 3 346 15 385 46 151 181 262 335
275 l65 6 3 64 c4 85 -2 89 -116 70z"
          />
          <path
            d="M5592 2298 l3 -453 28 -60 c65 -140 166 -195 358 -195 146 0 236 37
327 135 l62 66 0 -79 c0 -94 8 -104 77 -100 l48 3 5 558 c3 308 2 563 -1 568
-3 6 -35 9 -70 7 l-64 -3 -6 -370 c-6 -389 -7 -392 -56 -489 -27 -54 -83 -115
-130 -143 -38 -22 -62 -28 -132 -31 -47 -2 -104 1 -127 7 -67 18 -122 65 -152
129 l-27 57 -5 420 -5 420 -68 3 -68 3 3 -453z"
          />
          <path
            d="M2297 1272 c-152 -152 -277 -282 -277 -287 0 -6 98 -108 218 -228
l218 -217 568 0 c370 0 567 3 564 10 -5 16 -992 1000 -1003 1000 -6 0 -135
-125 -288 -278z"
          />
        </g>
      </svg>
    );
  }
);
