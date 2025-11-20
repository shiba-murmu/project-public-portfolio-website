// ThemeSwitcher.jsx
import React from 'react';
import ThemeButton from './ThemeButton';
import useTheme from './useTheme';

export default function ThemeSwitcher({ layout = 'row' }) {
  const { themeKey, setThemeKey, THEMES } = useTheme();
  const keys = Object.keys(THEMES);
  return (
    <div className={`flex ${layout === 'column' ? 'flex-col gap-2' : 'flex-row gap-3'} items-center`}>
      {keys.map(k => (
        <ThemeButton
          key={k}
          colorKey={k}
          accent={THEMES[k].vars['--accent']}
          active={k === themeKey}
          onClick={setThemeKey}
        />
      ))}
      <button
        onClick={() => setThemeKey('blue')}
        className="ml-2 px-2 py-1 rounded-md text-sm border"
      >
        Reset
      </button>
    </div>
  );
}
