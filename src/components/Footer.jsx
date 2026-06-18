// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="w-full border-t border-yt-border bg-yt-surface/80 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Name + Email */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
              M
            </div>
            <span className="font-semibold text-yt-text">Manvith Kumar Chilakapati</span>
          </div>
          <span className="hidden sm:inline text-yt-border">·</span>
          <a
            href="mailto:manvith@example.com"
            className="text-yt-muted hover:text-red-400 transition-colors duration-200 flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            manvithk459@gmail.com
          </a>
        </div>

        {/* Right: CTA button */}
        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 px-5 py-2.5 rounded-full
            bg-gradient-to-r from-red-600 to-orange-500
            text-white text-sm font-bold
            shadow-lg shadow-red-900/40
            hover:from-red-500 hover:to-orange-400
            hover:shadow-red-800/60 hover:scale-105
            active:scale-95
            transition-all duration-200
            whitespace-nowrap
          "
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          Built for Digital Heroes
        </a>
      </div>
    </footer>
  );
}
