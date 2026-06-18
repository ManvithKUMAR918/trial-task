// src/components/previews/ShortsPreview.jsx
// Simulates the YouTube Shorts full-screen player UI

// Right-side engagement buttons
const ENGAGEMENT_BUTTONS = [
  {
    label: 'Like',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
      </svg>
    ),
    count: '24K',
    danger: { top: '55%', right: '2%', width: '14%', height: '9%' },
  },
  {
    label: 'Dislike',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/>
      </svg>
    ),
    count: '132',
    danger: { top: '65%', right: '2%', width: '14%', height: '9%' },
  },
  {
    label: 'Comment',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 6.5C21 5.12 19.88 4 18.5 4h-13C4.12 4 3 5.12 3 6.5v8C3 15.88 4.12 17 5.5 17H6v3.5l3.5-3.5h9c1.38 0 2.5-1.12 2.5-2.5v-8z"/>
      </svg>
    ),
    count: '1.4K',
    danger: { top: '75%', right: '2%', width: '14%', height: '9%' },
  },
  {
    label: 'Share',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
      </svg>
    ),
    count: 'Share',
    danger: { top: '85%', right: '2%', width: '14%', height: '9%' },
  },
];

const BOTTOM_DANGER_ZONES = [
  { label: 'Channel Name & Title', style: { bottom: '12%', left: '0', right: '20%', height: '12%' } },
  { label: 'Follow Button', style: { bottom: '14%', right: '2%', width: '16%', height: '8%' } },
  { label: 'Progress Bar', style: { bottom: '0', left: '0', right: '0', height: '5%' } },
];

export default function ShortsPreview({ imageUrl, showDangerZones }) {
  return (
    <div className="flex flex-col items-center animate-fade-in">
      {/* Shorts player frame */}
      <div
        className="relative bg-black rounded-2xl overflow-hidden shadow-2xl"
        style={{ width: '260px', aspectRatio: '9/16' }}
      >
        {/* Background image */}
        <img
          src={imageUrl}
          alt="Shorts preview"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark gradient vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Top bar */}
        <div className="absolute top-3 left-0 right-0 flex items-center justify-between px-3 z-10">
          <div className="flex items-center gap-2">
            <span className="text-white font-black text-base tracking-tighter drop-shadow">Shorts</span>
          </div>
          <div className="flex gap-3">
            <svg className="w-5 h-5 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <svg className="w-5 h-5 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
            </svg>
          </div>
        </div>

        {/* Right-side engagement buttons */}
        <div className="absolute right-2 bottom-[22%] flex flex-col items-center gap-4 z-10">
          {ENGAGEMENT_BUTTONS.map((btn) => (
            <button
              key={btn.label}
              className="flex flex-col items-center gap-0.5 text-white drop-shadow-lg hover:scale-110 transition-transform"
            >
              {btn.icon}
              <span className="text-[10px] font-semibold">{btn.count}</span>
            </button>
          ))}
        </div>

        {/* Bottom channel info */}
        <div className="absolute bottom-8 left-3 right-16 z-10">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">
              C
            </div>
            <span className="text-white text-xs font-semibold drop-shadow">@YourChannel</span>
            <span className="text-white text-[10px] font-bold px-2 py-0.5 border border-white rounded-full hover:bg-white/20">
              Follow
            </span>
          </div>
          <p className="text-white text-[11px] leading-snug drop-shadow-md line-clamp-2">
            Your amazing Short caption goes here 🔥 #shorts #content #creator
          </p>
          <div className="flex items-center gap-1 mt-1.5">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            <span className="text-white text-[10px] font-medium">Original audio</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
          <div className="h-full w-2/5 bg-white rounded-full" />
        </div>

        {/* Danger overlays – engagement buttons */}
        {showDangerZones &&
          ENGAGEMENT_BUTTONS.map((btn) => (
            <div
              key={`danger-${btn.label}`}
              title={`⚠️ Danger Zone: ${btn.label} button`}
              className="absolute pointer-events-none danger-overlay z-20"
              style={{
                ...btn.danger,
                background: 'rgba(239,68,68,0.3)',
                border: '2px solid rgba(239,68,68,0.9)',
                borderRadius: '4px',
              }}
            />
          ))}

        {/* Danger overlays – bottom */}
        {showDangerZones &&
          BOTTOM_DANGER_ZONES.map((zone) => (
            <div
              key={`danger-${zone.label}`}
              title={`⚠️ Danger Zone: ${zone.label}`}
              className="absolute pointer-events-none danger-overlay z-20"
              style={{
                ...zone.style,
                background: 'rgba(239,68,68,0.25)',
                border: '2px solid rgba(239,68,68,0.8)',
                borderRadius: '4px',
              }}
            />
          ))}
      </div>

      {/* Legend */}
      {showDangerZones && (
        <div className="mt-4 w-full max-w-xs p-3 rounded-lg bg-red-950/40 border border-red-900/50">
          <p className="text-xs font-semibold text-red-400 mb-2 flex items-center gap-1.5">
            <span>⚠</span> Active Danger Zones
          </p>
          {[...ENGAGEMENT_BUTTONS.map(b => `${b.label} Button`), ...BOTTOM_DANGER_ZONES.map(z => z.label)].map((name) => (
            <div key={name} className="flex items-center gap-2 text-xs text-red-300/80">
              <span className="inline-block w-2.5 h-2.5 rounded-sm bg-red-500/60 border border-red-500 flex-shrink-0" />
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
