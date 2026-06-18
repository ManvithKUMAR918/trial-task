// src/App.jsx
import { useState, useCallback } from 'react';
import ControlPanel from './components/ControlPanel';
import DesktopPreview from './components/previews/DesktopPreview';
import MobilePreview from './components/previews/MobilePreview';
import ShortsPreview from './components/previews/ShortsPreview';
import Footer from './components/Footer';

// ─── Placeholder / empty-state canvas ────────────────────────────────────────
function EmptyCanvas({ viewMode }) {
  const labels = {
    desktop: { ratio: '16:9', name: 'Desktop Homepage' },
    mobile: { ratio: '16:9', name: 'Mobile App View' },
    shorts: { ratio: '9:16', name: 'YouTube Shorts' },
  };
  const info = labels[viewMode];

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[420px] gap-6 select-none">
      {/* Animated dashed placeholder */}
      <div
        className="relative flex items-center justify-center rounded-2xl border-2 border-dashed border-yt-border bg-yt-surface/50"
        style={
          viewMode === 'shorts'
            ? { width: '260px', aspectRatio: '9/16' }
            : { width: '420px', maxWidth: '90%', aspectRatio: '16/9' }
        }
      >
        {/* Subtle grid bg */}
        <div
          className="absolute inset-0 rounded-2xl opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="flex flex-col items-center gap-3 z-10 p-6 text-center">
          {/* YouTube icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-700/30 to-orange-600/20 border border-red-800/40 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-500/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-yt-muted">{info.name}</p>
            <p className="text-xs text-yt-muted/60 mt-0.5">{info.ratio} preview</p>
          </div>
          <p className="text-xs text-yt-muted/50 max-w-[180px] leading-relaxed">
            Upload an image in the panel to see your live preview here
          </p>
        </div>
      </div>

      {/* Step hints */}
      <div className="flex items-center gap-8 text-xs text-yt-muted/50">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-yt-elevated border border-yt-border flex items-center justify-center text-[10px] font-bold text-yt-muted">1</span>
          Upload image
        </div>
        <div className="w-8 h-px bg-yt-border" />
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-yt-elevated border border-yt-border flex items-center justify-center text-[10px] font-bold text-yt-muted">2</span>
          Choose view mode
        </div>
        <div className="w-8 h-px bg-yt-border" />
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-yt-elevated border border-yt-border flex items-center justify-center text-[10px] font-bold text-yt-muted">3</span>
          Toggle danger zones
        </div>
      </div>
    </div>
  );
}

// ─── View mode label bar ──────────────────────────────────────────────────────
const MODE_META = {
  desktop: { label: 'Desktop Homepage', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
  mobile:  { label: 'Mobile App View',  color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/30' },
  shorts:  { label: 'YouTube Shorts',   color: 'text-red-400',   bg: 'bg-red-500/10 border-red-500/30' },
};

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [imageUrl, setImageUrl]           = useState(null);
  const [viewMode, setViewMode]           = useState('desktop');
  const [showDangerZones, setDangerZones] = useState(false);

  const handleImageUpload = useCallback((url) => {
    // Revoke previous object URL to avoid memory leaks
    setImageUrl((prev) => {
      if (prev && prev.startsWith('blob:')) URL.revokeObjectURL(prev);
      return url;
    });
  }, []);

  const handleClearImage = useCallback(() => {
    setImageUrl((prev) => {
      if (prev && prev.startsWith('blob:')) URL.revokeObjectURL(prev);
      return null;
    });
  }, []);

  const meta = MODE_META[viewMode];

  return (
    <div className="min-h-screen flex flex-col bg-yt-dark">
      {/* ── Top navigation bar ── */}
      <header className="sticky top-0 z-50 flex items-center gap-4 px-6 py-3 bg-yt-dark/90 backdrop-blur-md border-b border-yt-border">
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
          <span className="font-black text-white text-sm tracking-tight">YT Safe-Zone Previewer</span>
        </div>

        <div className="flex-1" />

        {/* Current mode badge */}
        <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${meta.bg} ${meta.color}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
          {meta.label}
        </div>

        {/* Danger zone status */}
        {showDangerZones && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/15 border border-red-600/40 text-xs font-semibold text-red-400 animate-pulse-slow">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            Danger Zones Active
          </div>
        )}

        {/* GitHub-style help chip */}
        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yt-elevated hover:bg-yt-border border border-yt-border text-xs text-yt-muted hover:text-yt-text transition-colors duration-200"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          Digital Heroes
        </a>
      </header>

      {/* ── Main layout ── */}
      <main className="flex flex-1 gap-0 overflow-hidden">
        {/* Sidebar panel */}
        <div className="w-80 flex-shrink-0 border-r border-yt-border bg-yt-surface/40 p-5 overflow-y-auto scrollbar-thin">
          <ControlPanel
            imageUrl={imageUrl}
            viewMode={viewMode}
            showDangerZones={showDangerZones}
            onImageUpload={handleImageUpload}
            onViewModeChange={setViewMode}
            onDangerZonesChange={setDangerZones}
            onClearImage={handleClearImage}
          />
        </div>

        {/* Canvas area */}
        <section className="flex-1 overflow-auto scrollbar-thin">
          {/* Canvas header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-3 bg-yt-dark/80 backdrop-blur-sm border-b border-yt-border">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-yt-muted font-medium">Live Preview Canvas</span>
            </div>
            {imageUrl && (
              <div className="flex items-center gap-2 text-xs text-yt-muted">
                <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Image loaded
              </div>
            )}
          </div>

          {/* Preview content */}
          <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] p-8">
            {!imageUrl ? (
              <EmptyCanvas viewMode={viewMode} />
            ) : (
              <div className="animate-fade-in">
                {viewMode === 'desktop' && (
                  <DesktopPreview imageUrl={imageUrl} showDangerZones={showDangerZones} />
                )}
                {viewMode === 'mobile' && (
                  <MobilePreview imageUrl={imageUrl} showDangerZones={showDangerZones} />
                )}
                {viewMode === 'shorts' && (
                  <ShortsPreview imageUrl={imageUrl} showDangerZones={showDangerZones} />
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
