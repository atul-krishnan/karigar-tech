type Stop = {
  label: string;
  sub?: string;
  x: number;
  y: number;
  status: "done" | "active" | "pending";
};

type Props = {
  stops: Stop[];
  className?: string;
};

const STATUS_COLOR: Record<Stop["status"], string> = {
  done: "#2563EB",
  active: "#3B82F6",
  pending: "#EF4444",
};

export function ShipmentMap({ stops, className }: Props) {
  const active = stops.find((s) => s.status === "active");
  return (
    <svg
      viewBox="0 0 380 200"
      width="100%"
      className={className}
      role="img"
      aria-label="Shipment tracking map"
    >
      <defs>
        <pattern id="kr-ship-dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <rect width="18" height="18" fill="#EFF6FF" />
          <circle cx="9" cy="9" r="0.6" fill="#CBD5E1" />
        </pattern>
      </defs>
      <rect width="380" height="200" rx="10" fill="url(#kr-ship-dots)" />
      <path
        d="M28 40 L88 30 L150 48 L200 36 L260 58 L320 50 L355 80 L348 130 L320 160 L260 175 L200 170 L148 178 L100 162 L60 138 L36 100 Z"
        fill="#DBEAFE"
        stroke="#94A3B8"
        strokeWidth="0.6"
      />

      {stops.slice(0, -1).map((stop, idx) => {
        const next = stops[idx + 1];
        const midX = (stop.x + next.x) / 2;
        const midY = (stop.y + next.y) / 2 - 18;
        return (
          <path
            key={`leg-${stop.label}`}
            d={`M${stop.x} ${stop.y} Q ${midX} ${midY}, ${next.x} ${next.y}`}
            stroke="#2563EB"
            strokeWidth="2"
            strokeDasharray="5,4"
            fill="none"
          />
        );
      })}

      {stops.map((stop) => (
        <g key={stop.label}>
          <circle cx={stop.x} cy={stop.y} r="7" fill={STATUS_COLOR[stop.status]} stroke="#fff" strokeWidth="2.5" />
          <text x={stop.x} y={stop.y + 22} textAnchor="middle" fontSize="10" fontWeight="700" fill="#0F172A">
            {stop.label}
          </text>
          {stop.sub && (
            <text x={stop.x} y={stop.y + 34} textAnchor="middle" fontSize="9" fill="#64748B">
              {stop.sub}
            </text>
          )}
        </g>
      ))}

      {active && (
        <g transform={`translate(${active.x}, ${active.y - 36})`}>
          <circle r="14" fill="#fff" stroke="#3B82F6" strokeWidth="2" />
          <g
            transform="translate(-8 -7)"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 11h9V3H1zM10 6h3.5L16 8.5V11h-6" />
            <circle cx="4" cy="13" r="1.6" />
            <circle cx="12.5" cy="13" r="1.6" />
          </g>
        </g>
      )}

      <g transform="translate(345, 12)">
        <rect width="22" height="44" rx="4" fill="#fff" stroke="#E2E8F0" />
        <text x="11" y="16" fontSize="14" fontWeight="700" fill="#475569" textAnchor="middle">
          +
        </text>
        <line x1="2" y1="22" x2="20" y2="22" stroke="#E2E8F0" />
        <text x="11" y="38" fontSize="14" fontWeight="700" fill="#475569" textAnchor="middle">
          −
        </text>
      </g>
    </svg>
  );
}
