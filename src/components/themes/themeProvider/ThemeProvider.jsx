// ThemeProvider.jsx
import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const THEMES = {
  red: {
    name: 'Red',
    vars: {
      '--bg': '#fff5f5',
      '--card': '#ffe3e3',
      '--text': '#2b0505',
      '--accent': '#e11d48',
      '--muted': '#7f1d1d'
    }
  },
  blue: {
    name: 'Blue',
    vars: {
      '--bg': '#f0f9ff',
      '--card': '#e6f6ff',
      '--text': '#031633',
      '--accent': '#0ea5e9',
      '--muted': '#075985'
    }
  },
  green: {
    name: 'Green',
    vars: {
      '--bg': '#f0fff4',
      '--card': '#e6ffed',
      '--text': '#052e21',
      '--accent': '#10b981',
      '--muted': '#065f46'
    }
  },
  yellow: {
    name: 'Yellow',
    vars: {
      '--bg': '#fffbeb',
      '--card': '#fff7cc',
      '--text': '#42331a',
      '--accent': '#f59e0b',
      '--muted': '#7c4a00'
    }
  },
  violet: {
    name: 'Violet',
    vars: {
      '--bg': '#faf5ff',
      '--card': '#f3e8ff',
      '--text': '#2a0d3a',
      '--accent': '#8b5cf6',
      '--muted': '#5b21b6'
    }
  },
  pink: {
    name: 'Pink',
    vars: {
      '--bg': '#fff1f2',
      '--card': '#ffe4e6',
      '--text': '#3b0b0f',
      '--accent': '#ec4899',
      '--muted': '#9f1239'
    }
  }
};

const STORAGE_KEY = 'site_theme';

export default function ThemeProvider({ children, defaultTheme = 'blue' }) {
  const [themeKey, setThemeKey] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY) || defaultTheme; }
    catch { return defaultTheme; }
  });

  useEffect(() => {
    const theme = THEMES[themeKey] || THEMES[defaultTheme];
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
    root.setAttribute('data-theme', themeKey);
    try { localStorage.setItem(STORAGE_KEY, themeKey); } catch {}
  }, [themeKey, defaultTheme]);

  return (
    <ThemeContext.Provider value={{ themeKey, setThemeKey, THEMES }}>
      {/* Use Tailwind arbitrary value utilities that read CSS vars */}
      <div className="min-h-screen bg-(--bg) text-(--text)   transition-colors duration-200">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
