import { createContext, useContext, useEffect, useState } from 'react'

// Soft lavender base with a violet accent.
export const lightColors = {
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
  orbB: 'rgba(139,92,246,0.07)',
  orbC: 'rgba(167,139,250,0.07)',
  dot: 'rgba(139,92,246,0.07)',
  tagBg: 'rgba(139,92,246,0.06)',
  tagText: '#7C3AED',
  tagBorder: 'rgba(139,92,246,0.15)',
  sectionPill: 'rgba(139,92,246,0.08)',
  sectionPillBorder: 'rgba(139,92,246,0.2)',
  timelineLine: 'rgba(139,92,246,0.3)',
  accent: '#8B5CF6',
} as const

// Deep midnight base with the same violet accent, lifted for contrast.
export const darkColors: { [K in keyof typeof lightColors]: string } = {
  bg1: '#0A0A16',
  bg2: '#100E1C',
  text1: '#F5F3FF',
  text2: '#D6D3E0',
  text3: '#9E9AB0',
  text4: '#6B6880',
  card: 'rgba(255,255,255,0.04)',
  cardHover: 'rgba(255,255,255,0.07)',
  border: 'rgba(139,92,246,0.2)',
  input: 'rgba(255,255,255,0.04)',
  inputBorder: 'rgba(139,92,246,0.25)',
  divider: 'rgba(139,92,246,0.14)',
  navBg: 'rgba(10,10,22,0.8)',
  navBorder: 'rgba(139,92,246,0.15)',
  orbA: 'rgba(139,92,246,0.16)',
  orbB: 'rgba(139,92,246,0.12)',
  orbC: 'rgba(167,139,250,0.12)',
  dot: 'rgba(139,92,246,0.09)',
  tagBg: 'rgba(139,92,246,0.12)',
  tagText: '#C4B5FD',
  tagBorder: 'rgba(139,92,246,0.25)',
  sectionPill: 'rgba(139,92,246,0.14)',
  sectionPillBorder: 'rgba(139,92,246,0.3)',
  timelineLine: 'rgba(139,92,246,0.3)',
  accent: '#A78BFA',
}

// Back-compat alias — some modules import `colors`.
export const colors = lightColors

export type ThemeColors = {
  [K in keyof typeof lightColors]: string
}

interface ThemeCtx {
  isDark: boolean
  toggle: () => void
  c: ThemeColors
}

const ThemeContext = createContext<ThemeCtx>({
  isDark: false,
  toggle: () => {},
  c: lightColors,
})

function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return false
  const stored = localStorage.getItem('theme')
  if (stored === 'dark') return true
  if (stored === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme)
  const c = isDark ? darkColors : lightColors

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
    document.body.style.backgroundColor = c.bg1
    document.body.style.color = c.text1
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark, c.bg1, c.text1])

  const toggle = () => setIsDark((d) => !d)

  return (
    <ThemeContext.Provider value={{ isDark, toggle, c }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
