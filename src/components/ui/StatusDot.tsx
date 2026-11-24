import { AVAILABILITY_META, type AvailabilityStatus } from "@/config/availability";

interface StatusDotProps {
  status: AvailabilityStatus;
  onDark?: boolean;
  showShort?: boolean;
}

export function StatusDot({ status, onDark = false, showShort = false }: StatusDotProps) {
  const meta = AVAILABILITY_META[status];
  const label = showShort ? meta.shortLabel : meta.label;

  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs leading-4 font-semibold tracking-wide uppercase ${
        onDark ? "text-[#FFFFFF]" : "text-[#080808]"
      }`}
      title={meta.description}
    >
      <span
        aria-hidden="true"
        className="inline-block h-2.5 w-2.5 shrink-0 rounded-full border border-[#080808]"
        style={{ backgroundColor: meta.dotColor }}
      />
      <span>{label}</span>
    </span>
  );
}
