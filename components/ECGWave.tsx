"use client";

import { useId } from "react";

/**
 * Animated ECG line with two "named" QRS spikes after an initial flatline,
 * making the signature a heart rhythm that belongs to the doctor.
 * Deterministic — derived from props, not random.
 */
export default function ECGWave({
  height = 220,
  strokes = 2,
  className = "",
  showAxis = true,
  label,
}: {
  height?: number;
  strokes?: number;
  className?: string;
  showAxis?: boolean;
  label?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const pathId = `ecg-path-${uid}`;
  const gridId = `grid-${uid}`;

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height }}
        aria-hidden
      >
        <defs>
          <pattern id={gridId} width="40" height="20" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#0E1418" strokeOpacity="0.06" strokeWidth="0.5" />
          </pattern>
          <pattern id={`${gridId}-big`} width="200" height="100" patternUnits="userSpaceOnUse">
            <path d="M 200 0 L 0 0 0 100" fill="none" stroke="#0E1418" strokeOpacity="0.1" strokeWidth="0.6" />
          </pattern>
        </defs>

        <rect width="1200" height="220" fill={`url(#${gridId})`} />
        <rect width="1200" height="220" fill={`url(#${gridId}-big)`} />

        {showAxis && (
          <g>
            <line x1="0" y1="110" x2="1200" y2="110" stroke="#0E1418" strokeOpacity="0.15" strokeWidth="0.5" />
            {[0, 200, 400, 600, 800, 1000, 1200].map((x) => (
              <line key={x} x1={x} y1="100" x2={x} y2="120" stroke="#0E1418" strokeOpacity="0.25" strokeWidth="0.5" />
            ))}
          </g>
        )}

        {/* ECG path that traces: flatline → flatline → tiny bump → big QRS spike → T wave → flatline → second smaller QRS, repeating */}
        <path
          id={pathId}
          d="
            M 0 112
            L 90 112
            L 100 110 L 110 116 L 120 112
            L 220 112
            L 230 110 L 240 110 L 248 112 L 256 80 L 266 60 L 274 90 L 282 145 L 290 130 L 298 112 L 308 112 L 318 116
            L 380 112
            L 460 112
            L 470 110 L 480 110 L 488 112 L 496 84 L 506 66 L 514 92 L 522 142 L 530 132 L 538 112 L 548 112 L 558 115
            L 620 112
            L 700 112
            L 710 110 L 720 110 L 728 112 L 736 84 L 746 64 L 754 92 L 762 144 L 770 130 L 778 112 L 788 112 L 798 115
            L 860 112
            L 940 112
            L 950 110 L 960 110 L 968 112 L 976 80 L 986 58 L 994 90 L 1002 148 L 1010 132 L 1018 112 L 1028 112 L 1038 116
            L 1100 112
            L 1200 112
          "
          fill="none"
          stroke="#0E1418"
          strokeWidth={strokes}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ecg-path"
        />

        {/* Cursor dot that travels along the trace */}
        <circle cx="0" cy="112" r="4" fill="#C8442A">
          <animate
            attributeName="cx"
            dur="3.4s"
            repeatCount="indefinite"
            values="0;1200;0"
            keyTimes="0;0.85;1"
          />
        </circle>

        {label && (
          <g>
            <text x="14" y="28" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#0E1418" opacity="0.6" letterSpacing="2">
              {label}
            </text>
            <text x="1186" y="28" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#C8442A" letterSpacing="2">
              ● LIVE
            </text>
            <text x="14" y="200" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#0E1418" opacity="0.5" letterSpacing="1.5">
              LEAD II — 25 mm/s — 10 mm/mV
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
