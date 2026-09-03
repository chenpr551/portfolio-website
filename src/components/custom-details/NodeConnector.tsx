export function NodeConnector({ height = 48 }: { height?: number }) {
  const x = 8;
  const midY = height / 2;

  return (
    <svg
      width={16}
      height={height}
      className="mx-auto block overflow-visible"
      aria-hidden="true"
    >
      <circle cx={x} cy={4} r={4} className="port" />
      <circle cx={x} cy={height - 4} r={4} className="port" />
      <path
        d={`M ${x},4 C ${x},${midY} ${x},${midY} ${x},${height - 4}`}
        className="wire"
        fill="none"
      />
    </svg>
  );
}
