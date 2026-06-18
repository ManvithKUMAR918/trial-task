// src/components/UploadZone.jsx
import { useState, useCallback, useRef } from 'react';

export default function UploadZone({ onImageUpload }) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const processFile = useCallback(
    (file) => {
      if (!file || !file.type.startsWith('image/')) return;
      const url = URL.createObjectURL(file);
      onImageUpload(url);
    },
    [onImageUpload]
  );

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      processFile(file);
    },
    [processFile]
  );

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => setIsDragging(false);

  const onFileChange = (e) => processFile(e.target.files[0]);

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onClick={() => fileInputRef.current?.click()}
      className={`
        relative flex flex-col items-center justify-center w-full h-48
        border-2 border-dashed rounded-xl cursor-pointer
        transition-all duration-300 group
        ${isDragging
          ? 'border-red-500 bg-red-500/5 scale-[1.01]'
          : 'border-yt-border bg-yt-surface hover:border-yt-muted hover:bg-yt-elevated'
        }
      `}
    >
      {/* Upload icon */}
      <div className={`
        mb-3 p-3 rounded-full transition-all duration-300
        ${isDragging ? 'bg-red-500/20' : 'bg-yt-elevated group-hover:bg-yt-border'}
      `}>
        <svg className={`w-7 h-7 transition-colors duration-300 ${isDragging ? 'text-red-500' : 'text-yt-muted group-hover:text-yt-text'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      </div>

      <p className={`text-sm font-medium transition-colors duration-300 ${isDragging ? 'text-red-400' : 'text-yt-text'}`}>
        {isDragging ? 'Drop it here!' : 'Drag & drop your image'}
      </p>
      <p className="mt-1 text-xs text-yt-muted">
        or <span className="text-red-500 font-medium">click to browse</span>
      </p>
      <p className="mt-2 text-[10px] text-yt-muted/70 tracking-wide uppercase">
        Supports 16:9 thumbnails · 9:16 portrait frames
      </p>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onFileChange}
      />
    </div>
  );
}
