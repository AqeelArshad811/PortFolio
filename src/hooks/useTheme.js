import { useState, useEffect, useCallback } from 'react'

// Dark/light theme with localStorage persistence (defaults to dark).
export function useTheme() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    let saved = 'dark'
    try { saved = localStorage.getItem('theme') || 'dark' } catch (e) { /* ignore */ }
    setTheme(saved)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch (e) { /* ignore */ }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'light' ? 'dark' : 'light')), [])
  return { theme, toggle }
}
