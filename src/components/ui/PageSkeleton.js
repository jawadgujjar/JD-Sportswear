// Placeholder shown while a catalog page loads.
export default function PageSkeleton({ cards = 4 }) {
  return (
    <div className="animate-pulse" aria-busy="true" aria-label="Loading">
      <div className="bg-ink">
        <div className="mx-auto max-w-7xl space-y-4 px-4 py-14 sm:px-6">
          <div className="h-4 w-48 rounded bg-white/10" />
          <div className="h-12 w-2/3 max-w-md rounded bg-white/10" />
          <div className="h-5 w-full max-w-xl rounded bg-white/10" />
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {Array.from({ length: cards }, (_, i) => (
          <div key={i} className="h-80 rounded-2xl bg-zinc-100" />
        ))}
      </div>
    </div>
  );
}
