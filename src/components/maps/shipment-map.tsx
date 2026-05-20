import { INDIA_PATH } from "@/components/maps/india-map";

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
  done: "#10B981",
  active: "#2563EB",
  pending: "#64748B",
};

export function ShipmentMap({ stops, className }: Props) {
  const active = stops.find((s) => s.status === "active");
  return (
    <svg
      viewBox="0 0 380 440"
      width="100%"
      className={className}
      role="img"
      aria-label="Shipment tracking map"
    >
      <defs>
        <pattern id="kr-ship-dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="14" height="14" fill="#F8FAFC" />
          <circle cx="7" cy="7" r="0.6" fill="#CBD5E1" />
        </pattern>
        <linearGradient id="kr-ship-land" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
      </defs>

      <rect width="380" height="440" rx="10" fill="url(#kr-ship-dots)" />
      <path
        d={INDIA_PATH}
        fill="url(#kr-ship-land)"
        stroke="#64748B"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />

      {/* Route */}
      {stops.slice(0, -1).map((stop, idx) => {
        const next = stops[idx + 1];
        const midX = (stop.x + next.x) / 2 + 12;
        const midY = (stop.y + next.y) / 2 - 6;
        return (
          <path
            key={`leg-${stop.label}`}
            d={`M${stop.x} ${stop.y} Q ${midX} ${midY}, ${next.x} ${next.y}`}
            stroke="#2563EB"
            strokeWidth="2.2"
            strokeDasharray="5,4"
            fill="none"
            strokeLinecap="round"
          />
        );
      })}

      {stops.map((stop) => (
        <g key={stop.label}>
          <circle
            cx={stop.x}
            cy={stop.y}
            r="9"
            fill={STATUS_COLOR[stop.status]}
            stroke="#fff"
            strokeWidth="3"
          />
          <text
            x={stop.x + 14}
            y={stop.y - 2}
            fontSize="11"
            fontWeight="700"
            fill="#0F172A"
          >
            {stop.label}
          </text>
          {stop.sub && (
            <text x={stop.x + 14} y={stop.y + 11} fontSize="9.5" fill="#64748B">
              {stop.sub}
            </text>
          )}
        </g>
      ))}

      {/* Truck callout above the active stop */}
      {active && (
        <g transform={`translate(${active.x}, ${active.y - 28})`}>
          <circle r="13" fill="#fff" stroke="#2563EB" strokeWidth="2" />
          <g
            transform="translate(-8 -7)"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 11h9V3H1zM10 6h3.5L16 8.5V11h-6" />
            <circle cx="4" cy="13" r="1.6" />
            <circle cx="12.5" cy="13" r="1.6" />
          </g>
        </g>
      )}

      {/* Legend */}
      <g transform="translate(18, 20)">
        <rect width="120" height="56" rx="6" fill="#fff" stroke="#E2E8F0" />
        <text x="10" y="16" fontSize="9.5" fontWeight="700" fill="#0F172A">
          Shipment status
        </text>
        {[
          ["Completed", STATUS_COLOR.done],
          ["In-Transit", STATUS_COLOR.active],
          ["Pending", STATUS_COLOR.pending],
        ].map(([label, color], i) => (
          <g key={label} transform={`translate(10, ${26 + i * 10})`}>
            <circle cx="3.5" cy="3.5" r="3.5" fill={color} />
            <text x="12" y="7" fontSize="9.5" fill="#475569">
              {label}
            </text>
          </g>
        ))}
      </g>

      {/* Zoom control */}
      <g transform="translate(345, 18)">
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
