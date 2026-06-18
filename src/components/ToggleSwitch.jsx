// src/components/ToggleSwitch.jsx

export default function ToggleSwitch({ id, label, description, checked, onChange, accentColor = 'red' }) {
  const colors = {
    red: { track: checked ? 'bg-red-600' : 'bg-yt-border', knob: 'bg-white' },
    blue: { track: checked ? 'bg-blue-500' : 'bg-yt-border', knob: 'bg-white' },
  };
  const c = colors[accentColor] || colors.red;

  return (
    <label htmlFor={id} className="flex items-center justify-between cursor-pointer group">
      <div className="flex-1 pr-3">
        <p className="text-sm font-medium text-yt-text group-hover:text-white transition-colors">{label}</p>
        {description && (
          <p className="text-xs text-yt-muted mt-0.5 leading-snug">{description}</p>
        )}
      </div>
      <div className="relative flex-shrink-0">
        <input
          id={id}
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className={`w-11 h-6 rounded-full transition-colors duration-300 ${c.track}`} />
        <div
          className={`
            absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-md
            transition-transform duration-300 ${c.knob}
            ${checked ? 'translate-x-5' : 'translate-x-0'}
          `}
        />
      </div>
    </label>
  );
}
