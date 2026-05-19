import { createContext, useContext, useState, useEffect } from 'react'

export const palette = {
  dark: {
    bg1: '#07071A',
    bg2: '#0D0D2B',
    text1: '#F1F5F9',
    text2: '#CBD5E1',
    text3: '#64748B',
    text4: '#475569',
    card: 'rgba(255,255,255,0.04)',
    cardHover: 'rgba(255,255,255,0.06)',
    border: 'rgba(139,92,246,0.15)',
    input: 'rgba(255,255,255,0.04)',
    inputBorder: 'rgba(139,92,246,0.15)',
    divider: 'rgba(255,255,255,0.06)',
    navBg: 'rgba(7,7,26,0.85)',
    navBorder: 'rgba(139,92,246,0.12)',
    orbA: 'rgba(139,92,246,0.22)',
    orbB: 'rgba(236,72,153,0.18)',
    orbC: 'rgba(251,191,36,0.12)',
    dot: 'rgba(139,92,246,0.12)',
    tagBg: 'rgba(255,255,255,0.05)',
    tagText: '#64748B',
    tagBorder: 'rgba(255,255,255,0.08)',
    sectionPill: 'rgba(139,92,246,0.1)',
    sectionPillBorder: 'rgba(139,92,246,0.2)',
    timelineLine: 'rgba(139,92,246,0.4)',
  },
  light: {
    bg1: '#F7F5FF',
    bg2: '#EDE9FF',
    text1: '#1A1640',
    text2: '#374151',
    text3: '#6B7280',
    text4: '#9CA3AF',
    card: 'rgba(255,255,255,0.9)',
    cardHover: 'rgba(255,255,255,1)',
    border: 'rgba(139,92,246,0.2)',
    input: '#FFFFFF',
    inputBorder: 'rgba(139,92,246,0.2)',
    divider: 'rgba(139,92,246,0.1)',
    navBg: 'rgba(247,245,255,0.88)',
    navBorder: 'rgba(139,92,246,0.15)',
    orbA: 'rgba(139,92,246,0.10)',
    orbB: 'rgba(236,72,153,0.07)',
    orbC: 'rgba(251,191,36,0.07)',
    dot: 'rgba(139,92,246,0.07)',
    tagBg: 'rgba(139,92,246,0.06)',
    tagText: '#7C3AED',
    tagBorder: 'rgba(139,92,246,0.15)',
    sectionPill: 'rgba(139,92,246,0.08)',
    sectionPillBorder: 'rgba(139,92,246,0.2)',
    timelineLine: 'rgba(139,92,246,0.3)',
  },
} as const

export type ThemeColors = {
  [K in keyof typeof palette.dark]: string
}

interface ThemeCtx {
  isDark: boolean
  toggle: () => void
  c: ThemeColors
}

const ThemeContext = createContext<ThemeCtx>({
  isDark: true,
  toggle: () => {},
  c: palette.dark,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    document.body.style.backgroundColor = isDark ? palette.dark.bg1 : palette.light.bg1
    document.body.style.color = isDark ? palette.dark.text1 : palette.light.text1
  }, [isDark])

  const c = isDark ? palette.dark : palette.light

  return (
    <ThemeContext.Provider value={{ isDark, toggle: () => setIsDark((d) => !d), c }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
