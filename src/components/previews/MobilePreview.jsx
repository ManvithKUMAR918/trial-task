// src/components/previews/MobilePreview.jsx
// Simulates the YouTube mobile app feed card

const DANGER_ZONES = [
  // Duration badge – bottom-right corner of thumbnail
  {
    label: 'Duration Badge',
    style: { bottom: '7%', right: '2%', width: '20%', height: '11%' },
  },
  // Watch Later / Save – top-right of thumbnail on hover/tap
  {
    label: 'Watch Later Button',
    style: { top: '4%', right: '2%', width: '14%', height: '14%' },
  },
];

// Mock phone frame wrapper
function PhoneFrame({ children }) {
  return (
    <div className="relative mx-auto bg-yt-dark rounded-[2.5rem] border-4 border-yt-elevated shadow-2xl overflow-hidden"
      style={{ width: '300px' }}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-yt-elevated rounded-b-2xl z-10" />
      {/* Screen */}
      <div className="pt-8 pb-6 bg-yt-dark min-h-[560px]">
        {/* YouTube mobile top bar */}
        <div className="flex items-center justify-between px-4 py-2 mb-2">
          <span className="text-yt-red font-black text-xl tracking-tighter">YouTube</span>
          <div className="flex gap-3 text-yt-text">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

export default function MobilePreview({ imageUrl, showDangerZones }) {
  return (
    <div className="flex flex-col items-center animate-fade-in">
      <PhoneFrame>
        {/* Feed card */}
        <div className="w-full">
          {/* Thumbnail */}
          <div className="relative w-full bg-black" style={{ aspectRatio: '16/9' }}>
            <img
              src={imageUrl}
              alt="Thumbnail preview"
              className="w-full h-full object-cover"
            />
            {/* Duration badge */}
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
              12:34
            </div>
            {/* Watch later icon */}
            <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Danger overlays */}
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
                  <span className="absolute -top-5 left-0 text-[8px] font-bold text-red-400 bg-black/80 px-1 py-0.5 rounded whitespace-nowrap">
                    ⚠ {zone.label}
                  </span>
                </div>
              ))}
          </div>

          {/* Video metadata row */}
          <div className="flex gap-2 px-3 py-2">
            {/* Channel avatar */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
              C
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-yt-text leading-snug line-clamp-2">
                Your Amazing Video Title Goes Here – Best Practices 2024
              </p>
              <p className="mt-0.5 text-[10px] text-yt-muted">YourChannel • 1.2M views • 3 days ago</p>
            </div>

            {/* Three-dot menu */}
            <button className="flex-shrink-0 text-yt-muted">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Second card ghost (depth effect) */}
        <div className="w-full opacity-30">
          <div className="w-full bg-yt-elevated" style={{ aspectRatio: '16/9' }} />
          <div className="flex gap-2 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-yt-border flex-shrink-0" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2.5 bg-yt-border rounded-full w-4/5" />
              <div className="h-2 bg-yt-border rounded-full w-3/5" />
            </div>
          </div>
        </div>
      </PhoneFrame>

      {/* Danger legend */}
      {showDangerZones && (
        <div className="mt-4 w-full max-w-xs p-3 rounded-lg bg-red-950/40 border border-red-900/50">
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
