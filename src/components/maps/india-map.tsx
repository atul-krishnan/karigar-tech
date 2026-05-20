type Pin = {
  city: string;
  /** SVG-space x coordinate (0–380) */
  x: number;
  /** SVG-space y coordinate (0–440) */
  y: number;
  /** Optional label suffix shown beside city name */
  meta?: string;
  /** Optional change tag for the right side of the label */
  delta?: { value: string; tone?: "up" | "down" | "flat" };
  /** Optional badge value (renders large dot with number) */
  value?: number | string;
  color?: string;
};

type Props = {
  pins: Pin[];
  variant?: "intel" | "concentration";
  showRoutes?: boolean;
  showLegend?: boolean;
  className?: string;
  height?: number;
};

const TONE_COLOR: Record<string, string> = {
  up: "#DC2626",
  down: "#059669",
  flat: "#94A3B8",
};

// Stylised India landmass: 380 wide × 440 tall. Captures Kashmir peak,
// the Northeast finger, Gujarat west bulge, and Kanyakumari south point.
export const INDIA_PATH =
  "M 145 22 L 165 18 L 185 22 L 210 28 L 240 30 L 268 38 L 290 60 L 310 80 L 320 100 L 308 115 L 285 122 L 270 138 L 258 152 L 268 175 L 278 200 L 275 230 L 262 258 L 245 290 L 222 322 L 200 355 L 185 385 L 175 415 L 165 405 L 158 380 L 148 355 L 135 320 L 118 290 L 102 260 L 88 232 L 80 210 L 68 215 L 52 220 L 42 210 L 50 192 L 60 175 L 65 155 L 60 132 L 70 110 L 85 92 L 100 75 L 115 55 L 128 38 Z";

const SRI_LANKA_PATH = "M 200 425 Q 215 422 220 432 Q 215 442 205 440 Q 195 435 200 425 Z";

export function IndiaMap({
  pins,
  variant = "intel",
  showRoutes = false,
  showLegend = false,
  className,
  height,
}: Props) {
  return (
    <svg
      viewBox="0 0 380 440"
      width="100%"
      style={height ? { height, width: "100%" } : undefined}
      className={className}
      role="img"
      aria-label="Map of India with supplier locations"
    >
      <defs>
        <pattern id="kr-map-dots" patternUnits="userSpaceOnUse" width="14" height="14">
          <circle cx="7" cy="7" r="0.6" fill="#CBD5E1" />
        </pattern>
        <linearGradient id="kr-map-land" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
      </defs>

      <rect width="380" height="440" fill="#F8FAFC" />
      <rect width="380" height="440" fill="url(#kr-map-dots)" />
      <path d={INDIA_PATH} fill="url(#kr-map-land)" stroke="#64748B" strokeWidth="1.1" strokeLinejoin="round" />
      <path d={SRI_LANKA_PATH} fill="url(#kr-map-land)" stroke="#64748B" strokeWidth="1" />

      {/* Country label */}
      <text x="200" y="200" fontSize="11" fill="#94A3B8" fontWeight="600" textAnchor="middle" opacity="0.55">
        INDIA
      </text>

      {showRoutes &&
        pins.slice(0, -1).map((pin, idx) => {
          const next = pins[idx + 1];
          return (
            <line
              key={`route-${pin.city}`}
              x1={pin.x}
              y1={pin.y}
              x2={next.x}
              y2={next.y}
              stroke="#3B82F6"
              strokeWidth="1.2"
              strokeDasharray="3,3"
              opacity="0.7"
            />
          );
        })}

      {pins.map((pin) => {
        const deltaColor = pin.delta ? TONE_COLOR[pin.delta.tone ?? "flat"] : "#475569";
        const pinColor = pin.color ?? (variant === "concentration" ? "#F97316" : "#F59E0B");
        if (variant === "concentration" && pin.value !== undefined) {
          // Place label to the right so we don't overlap pin
          const labelX = pin.x + 16;
          const labelY = pin.y + 4;
          return (
            <g key={pin.city}>
              <circle cx={pin.x} cy={pin.y} r="18" fill={pinColor} opacity="0.15" />
              <circle cx={pin.x} cy={pin.y} r="12" fill={pinColor} stroke="#fff" strokeWidth="2.5" />
              <text x={pin.x} y={pin.y + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
                {pin.value}
              </text>
              <text x={labelX} y={labelY} fontSize="11" fontWeight="700" fill="#0F172A">
                {pin.city}
              </text>
            </g>
          );
        }
        // Intel-variant pill label
        const labelX = pin.x + 14;
        return (
          <g key={pin.city}>
            <circle cx={pin.x} cy={pin.y} r="7" fill={pinColor} stroke="#fff" strokeWidth="2.5" />
            <rect
              x={labelX}
              y={pin.y - 16}
              width="104"
              height="34"
              rx="6"
              fill="#fff"
              stroke="#E2E8F0"
            />
            <text x={labelX + 8} y={pin.y - 3} fontSize="10.5" fontWeight="700" fill="#0F172A">
              {pin.city}
            </text>
            <text x={labelX + 8} y={pin.y + 11} fontSize="9.5" fill="#64748B">
              {pin.meta ?? ""}{" "}
              {pin.delta && (
                <tspan fill={deltaColor} fontWeight="700">
                  {pin.delta.value}
                </tspan>
              )}
            </text>
          </g>
        );
      })}

      {showLegend && (
        <g transform="translate(252, 18)">
          <rect x="0" y="0" width="118" height="92" rx="6" fill="#fff" stroke="#E2E8F0" />
          <text x="9" y="16" fontSize="9.5" fill="#0F172A" fontWeight="700">
            Price vs 30 days ago
          </text>
          {[
            ["> 3% Decrease", "#059669"],
            ["1–3% Decrease", "#10B981"],
            ["Stable (±1%)", "#94A3B8"],
            ["1–3% Increase", "#F59E0B"],
            ["> 3% Increase", "#EF4444"],
          ].map(([label, color], i) => (
            <g key={label} transform={`translate(9, ${30 + i * 11})`}>
              <circle cx="3.5" cy="3.5" r="3.5" fill={color} />
              <text x="14" y="7" fontSize="9.5" fill="#475569">
                {label}
              </text>
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}
