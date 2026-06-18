// src/components/ControlPanel.jsx
import ToggleSwitch from './ToggleSwitch';
import UploadZone from './UploadZone';

const VIEW_MODES = [
  {
    id: 'desktop',
    label: 'Desktop Homepage',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: '16:9',
    description: 'YouTube homepage grid card',
  },
  {
    id: 'mobile',
    label: 'Mobile App View',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    badge: '16:9',
    description: 'YouTube mobile feed card',
  },
  {
    id: 'shorts',
    label: 'YouTube Shorts',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.77 10.32l-1.2-.5L18 9.06c1.84-.96 2.56-3.22 1.6-5.06s-3.22-2.56-5.06-1.6L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25L7.4 14.2 6 14.94c-1.84.96-2.56 3.22-1.6 5.06.96 1.84 3.22 2.56 5.06 1.6l8.54-4.54c1.29-.68 2.07-2.04 2-3.49-.07-1.42-.93-2.67-2.23-3.25zm-9.39 5.49l-.03-6.88L14.99 12l-6.61 3.81z"/>
      </svg>
    ),
    badge: '9:16',
    description: 'Full-screen Shorts player',
  },
];

export default function ControlPanel({
  imageUrl,
  viewMode,
  showDangerZones,
  onImageUpload,
  onViewModeChange,
  onDangerZonesChange,
  onClearImage,
}) {
  return (
    <aside className="w-80 flex-shrink-0 flex flex-col gap-5 h-full overflow-y-auto scrollbar-thin pr-1">
      {/* Branding */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center shadow-lg shadow-red-900/40 flex-shrink-0">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-sm font-bold text-yt-text leading-tight">YT Safe-Zone Previewer</h1>
          <p className="text-[10px] text-yt-muted leading-none">Creator Thumbnail Toolkit</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-yt-border" />

      {/* Upload section */}
      <section>
        <h2 className="text-xs font-semibold text-yt-muted uppercase tracking-widest mb-3">
          01 — Upload Image
        </h2>

        {imageUrl ? (
          <div className="relative group rounded-xl overflow-hidden border border-yt-border">
            <img
              src={imageUrl}
              alt="Uploaded thumbnail"
              className="w-full object-cover"
              style={{ maxHeight: '120px' }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-200 flex items-center justify-center">
              <button
                onClick={onClearImage}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-lg"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Replace Image
              </button>
            </div>
          </div>
        ) : (
          <UploadZone onImageUpload={onImageUpload} />
        )}
      </section>

      {/* View Mode section */}
      <section>
        <h2 className="text-xs font-semibold text-yt-muted uppercase tracking-widest mb-3">
          02 — View Mode
        </h2>
        <div className="flex flex-col gap-2">
          {VIEW_MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => onViewModeChange(mode.id)}
              className={`
                relative flex items-center gap-3 w-full px-3 py-3 rounded-xl text-left
                border transition-all duration-200
                ${viewMode === mode.id
                  ? 'bg-red-600/15 border-red-600/60 text-yt-text shadow-sm shadow-red-900/20'
                  : 'bg-yt-surface border-yt-border text-yt-muted hover:bg-yt-elevated hover:text-yt-text hover:border-yt-muted'
                }
              `}
            >
              {/* Active indicator dot */}
              {viewMode === mode.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-red-500 rounded-r-full" />
              )}
              <span className={`flex-shrink-0 ${viewMode === mode.id ? 'text-red-400' : ''}`}>
                {mode.icon}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium block">{mode.label}</span>
                <span className="text-[10px] text-yt-muted block">{mode.description}</span>
              </div>
              <span className={`
                text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wide flex-shrink-0
                ${viewMode === mode.id ? 'bg-red-600/30 text-red-300' : 'bg-yt-elevated text-yt-muted'}
              `}>
                {mode.badge}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Danger zone toggle */}
      <section>
        <h2 className="text-xs font-semibold text-yt-muted uppercase tracking-widest mb-3">
          03 — Safe Zone Inspector
        </h2>
        <div className="bg-yt-surface border border-yt-border rounded-xl p-4">
          <ToggleSwitch
            id="danger-zones"
            label="Show Danger Zones"
            description="Highlights areas blocked by YouTube's UI elements"
            checked={showDangerZones}
            onChange={onDangerZonesChange}
            accentColor="red"
          />

          {showDangerZones && (
            <div className="mt-3 pt-3 border-t border-yt-border space-y-1.5 animate-fade-in">
              {[
                { color: 'bg-red-500', label: 'Duration / Timestamp badge' },
                { color: 'bg-red-500', label: 'Watch Later / Save button' },
                { color: 'bg-red-500', label: 'Engagement buttons (Shorts)' },
                { color: 'bg-red-500', label: 'Channel info & title (Shorts)' },
                { color: 'bg-red-500', label: 'Progress bar (Shorts)' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs text-yt-muted">
                  <span className={`w-2.5 h-2.5 rounded-sm ${item.color} opacity-70 flex-shrink-0`} />
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tips section */}
      <section className="mt-auto">
        <div className="rounded-xl bg-gradient-to-br from-yt-elevated to-yt-surface border border-yt-border p-4">
          <p className="text-xs font-semibold text-yt-text mb-2 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Pro Tips
          </p>
          <ul className="space-y-1.5 text-[11px] text-yt-muted leading-snug">
            <li className="flex gap-1.5"><span className="text-red-500 flex-shrink-0 font-bold">→</span> Keep text in the center 70% of your thumbnail</li>
            <li className="flex gap-1.5"><span className="text-red-500 flex-shrink-0 font-bold">→</span> Avoid bottom-right corner for key content</li>
            <li className="flex gap-1.5"><span className="text-red-500 flex-shrink-0 font-bold">→</span> For Shorts: keep focal point top-center</li>
            <li className="flex gap-1.5"><span className="text-red-500 flex-shrink-0 font-bold">→</span> Test across all three view modes</li>
          </ul>
        </div>
      </section>
    </aside>
  );
}
