// src/components/previews/DesktopPreview.jsx
// Simulates how a thumbnail looks on the YouTube desktop homepage grid

const DANGER_ZONES = [
  // Duration badge – bottom-right of thumbnail
  {
    label: 'Duration Timestamp',
    style: { bottom: '6%', right: '2%', width: '18%', height: '12%' },
  },
];

export default function DesktopPreview({ imageUrl, showDangerZones }) {
  return (
    <div className="flex flex-col items-start w-full max-w-sm animate-fade-in">
      {/* Thumbnail */}
      <div className="relative w-full rounded-xl overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>
        <img
          src={imageUrl}
          alt="Thumbnail preview"
          className="w-full h-full object-cover"
        />

        {/* Duration overlay (real YouTube UI element) */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm tracking-tight select-none">
          12:34
        </div>

        {/* Danger zones */}
        {showDangerZones &&
          DANGER_ZONES.map((zone) => (
            <div
              key={zone.label}
              title={`⚠️ Danger Zone: ${zone.label}`}
              className="absolute pointer-events-none danger-overlay"
              style={{
                ...zone.style,
                background: 'rgba(239,68,68,0.25)',
                border: '2px solid rgba(239,68,68,0.8)',
                borderRadius: '4px',
              }}
            >
              <span className="absolute -top-5 left-0 text-[9px] font-bold text-red-400 bg-black/80 px-1 py-0.5 rounded whitespace-nowrap">
                ⚠ {zone.label}
              </span>
            </div>
          ))}
      </div>

      {/* Video meta row */}
      <div className="flex mt-3 gap-3 w-full">
        {/* Channel avatar */}
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
          C
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-yt-text leading-snug line-clamp-2">
            Your Amazing Video Title Goes Here – Best Practices 2024
          </p>
          <p className="mt-1 text-xs text-yt-muted">YourChannel • 1.2M views • 3 days ago</p>
        </div>

        {/* Three-dot menu */}
        <button className="flex-shrink-0 text-yt-muted hover:text-yt-text mt-0.5">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>

      {/* Danger zone legend */}
      {showDangerZones && (
        <div className="mt-4 w-full p-3 rounded-lg bg-red-950/40 border border-red-900/50">
          <p className="text-xs font-semibold text-red-400 mb-2 flex items-center gap-1.5">
            <span>⚠</span> Active Danger Zones
          </p>
          {DANGER_ZONES.map((z) => (
            <div key={z.label} className="flex items-center gap-2 text-xs text-red-300/80">
              <span className="inline-block w-2.5 h-2.5 rounded-sm bg-red-500/60 border border-red-500 flex-shrink-0" />
              {z.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
