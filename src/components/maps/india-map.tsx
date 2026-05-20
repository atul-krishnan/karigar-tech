type Pin = {
  city: string;
  /** SVG-space x coordinate (0–380) */
  x: number;
  /** SVG-space y coordinate (0–340) */
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
};

const TONE_COLOR: Record<string, string> = {
  up: "#DC2626",
  down: "#059669",
  flat: "#94A3B8",
};

const INDIA_PATH =
  // Stylised India landmass — approximate outline for an at-a-glance visual.
  "M155 18 C175 16 200 22 225 30 C250 26 275 32 290 50 C302 70 308 92 312 112 C318 130 322 150 326 168 C328 190 320 210 312 226 C306 244 296 258 286 274 C272 290 252 304 232 312 C214 322 196 332 178 338 C160 344 144 332 134 318 C124 302 116 286 110 270 C100 256 92 240 84 222 C74 206 64 188 58 168 C52 148 50 128 56 108 C62 90 76 76 92 64 C108 52 124 42 138 32 C144 26 148 22 155 18 Z";

export function IndiaMap({
  pins,
  variant = "intel",
  showRoutes = false,
  showLegend = false,
  className,
}: Props) {
  return (
    <svg
      viewBox="0 0 380 340"
      width="100%"
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

      <rect width="380" height="340" fill="#F8FAFC" />
      <rect width="380" height="340" fill="url(#kr-map-dots)" />
      <path
        d={INDIA_PATH}
        fill="url(#kr-map-land)"
        stroke="#94A3B8"
        strokeWidth="0.8"
      />

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
              stroke="#94A3B8"
              strokeWidth="0.8"
              strokeDasharray="3,3"
            />
          );
        })}

      {pins.map((pin) => {
        const deltaColor = pin.delta ? TONE_COLOR[pin.delta.tone ?? "flat"] : "#475569";
        const pinColor = pin.color ?? (variant === "concentration" ? "#F97316" : "#F59E0B");
        if (variant === "concentration" && pin.value !== undefined) {
          return (
            <g key={pin.city}>
              <circle cx={pin.x} cy={pin.y} r="16" fill={pinColor} opacity="0.18" />
              <circle cx={pin.x} cy={pin.y} r="11" fill={pinColor} stroke="#fff" strokeWidth="2" />
              <text
                x={pin.x}
                y={pin.y + 3}
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill="#fff"
              >
                {pin.value}
              </text>
              <text
                x={pin.x}
                y={pin.y + 26}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="#0F172A"
              >
                {pin.city}
              </text>
            </g>
          );
        }
        return (
          <g key={pin.city}>
            <circle cx={pin.x} cy={pin.y} r="6" fill={pinColor} stroke="#fff" strokeWidth="2" />
            <rect
              x={pin.x + 10}
              y={pin.y - 18}
              width="98"
              height="36"
              rx="4"
              fill="#fff"
              stroke="#E2E8F0"
            />
            <text x={pin.x + 16} y={pin.y - 5} fontSize="10" fontWeight="600" fill="#0F172A">
              {pin.city}
            </text>
            <text x={pin.x + 16} y={pin.y + 8} fontSize="9" fill="#64748B">
              {pin.meta ?? ""}{" "}
              {pin.delta && (
                <tspan fill={deltaColor} fontWeight="600">
                  {pin.delta.value}
                </tspan>
              )}
            </text>
          </g>
        );
      })}

      {showLegend && (
        <g transform="translate(260, 16)">
          <rect x="0" y="0" width="108" height="86" rx="6" fill="#fff" stroke="#E2E8F0" />
          <text x="8" y="16" fontSize="9" fill="#64748B" fontWeight="700">
            Price vs 30 Days Ago
          </text>
          {[
            ["> 3% Decrease", "#059669"],
            ["1–3% Decrease", "#10B981"],
            ["Stable (±1%)", "#94A3B8"],
            ["1–3% Increase", "#F59E0B"],
            ["> 3% Increase", "#EF4444"],
          ].map(([label, color], i) => (
            <g key={label} transform={`translate(8, ${28 + i * 11})`}>
              <circle cx="3" cy="3" r="3" fill={color} />
              <text x="12" y="6" fontSize="9" fill="#475569">
                {label}
              </text>
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}
