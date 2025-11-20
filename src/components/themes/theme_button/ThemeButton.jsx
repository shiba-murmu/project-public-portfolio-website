// ThemeButton.jsx
import React from 'react';

export default function ThemeButton({ colorKey, accent, active, onClick }) {
  return (
    <button
      onClick={() => onClick(colorKey)}
      aria-pressed={active}
      title={colorKey}
      className={`w-8 h-8 rounded-full ring-2 ring-offset-2 focus:outline-none focus:ring-4 transform hover:scale-105 transition`}
      style={{
        background: accent,
        boxShadow: active ? '0 0 0 4px rgba(0,0,0,0.08)' : 'none'
      }}
    />
  );
}
