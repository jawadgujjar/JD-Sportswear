// Vector jersey used as a placeholder until real product photos are added.
const shapes = {
  tank: "M62 12 Q100 58 138 12 L162 16 Q160 62 180 82 L180 228 Q100 238 20 228 L20 82 Q40 62 38 16 Z",
  tee: "M72 12 Q100 40 128 12 L172 30 L198 82 L164 98 L160 88 L160 228 Q100 236 40 228 L40 88 L36 98 L2 82 L28 30 Z",
};

const necks = {
  tank: "M62 12 Q100 58 138 12",
  tee: "M72 12 Q100 40 128 12",
};

export default function JerseyArt({ colors, shape = "tee", number = "", className = "" }) {
  const [primary, secondary] = colors;

  return (
    <svg viewBox="0 0 200 240" className={className} aria-hidden="true">
      <path d={shapes[shape]} fill={primary} stroke={secondary} strokeWidth="5" strokeLinejoin="round" />
      <path d={necks[shape]} fill="none" stroke={secondary} strokeWidth="10" strokeLinecap="round" />
      <rect x="20" y="196" width="160" height="10" fill={secondary} opacity="0.85" />
      <text
        x="100"
        y="168"
        textAnchor="middle"
        fontFamily="var(--font-oswald), sans-serif"
        fontWeight="700"
        fontSize="78"
        fill={secondary}
      >
        {number}
      </text>
    </svg>
  );
}
