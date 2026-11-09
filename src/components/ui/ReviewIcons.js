// Review platform marks and star ratings (supports half stars, e.g. 4.5).

const STAR = "M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9z";

function fillFor(rating, i) {
  return Math.max(0, Math.min(1, rating - i)) * 100;
}

// Yellow stars (Google / BBB style)
export function Stars({ rating, className = "h-4 w-4", color = "#FBBC04" }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`relative ${className}`}>
          <svg viewBox="0 0 20 20" className="absolute inset-0 h-full w-full fill-zinc-200"><path d={STAR} /></svg>
          <span className="absolute inset-0 overflow-hidden" style={{ width: `${fillFor(rating, i)}%` }}>
            <svg viewBox="0 0 20 20" className={className} style={{ fill: color }}><path d={STAR} /></svg>
          </span>
        </span>
      ))}
    </div>
  );
}

// Trustpilot style: white stars in green squares
export function TrustpilotStars({ rating, className = "h-9 w-9" }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars on Trustpilot`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`relative flex items-center justify-center bg-zinc-300 ${className}`}>
          <span className="absolute inset-y-0 left-0 bg-[#00B67A]" style={{ width: `${fillFor(rating, i)}%` }} />
          <svg viewBox="0 0 20 20" className="relative h-3/4 w-3/4 fill-white"><path d={STAR} /></svg>
        </span>
      ))}
    </div>
  );
}

export function GoogleLogo({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

export function GoogleWordmark({ className = "text-4xl" }) {
  const letters = [
    ["G", "#4285F4"], ["o", "#EA4335"], ["o", "#FBBC05"], ["g", "#4285F4"], ["l", "#34A853"], ["e", "#EA4335"],
  ];
  return (
    <span className={`font-sans font-medium tracking-tight ${className}`} aria-label="Google">
      {letters.map(([ch, color], i) => (
        <span key={i} style={{ color }} aria-hidden="true">{ch}</span>
      ))}
    </span>
  );
}

export function TrustpilotWordmark({ className = "text-2xl" }) {
  return (
    <span className={`flex items-center gap-1.5 font-sans font-semibold text-zinc-900 ${className}`}>
      <svg viewBox="0 0 20 20" className="h-[1.1em] w-[1.1em] fill-[#00B67A]" aria-hidden="true"><path d={STAR} /></svg>
      Trustpilot
    </span>
  );
}

export function BBBMark() {
  return (
    <span className="flex items-stretch overflow-hidden rounded border border-[#005A78] text-white" aria-label="BBB Accredited Business">
      <span className="flex items-center bg-[#005A78] px-2 font-serif text-lg font-bold italic">BBB</span>
      <span className="flex flex-col justify-center bg-[#005A78]/90 px-2 text-[9px] font-bold uppercase leading-tight">
        <span>Accredited</span>
        <span>Business</span>
      </span>
    </span>
  );
}
