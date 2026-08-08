import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { messages } from './messages.js'
import { profiles } from '../data/profiles.js'

const STORAGE_KEY = 'site-locale'
const DEFAULT_LOCALE = 'en'

const LocaleContext = createContext(null)

function readStoredLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'zh') return stored
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(readStoredLocale)

  useEffect(() => {
    const ui = messages[locale]
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    document.title = ui.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', ui.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
  }, [locale])

  const value = useMemo(() => {
    const toggleLocale = () => setLocale((prev) => (prev === 'en' ? 'zh' : 'en'))
    return {
      locale,
      setLocale,
      toggleLocale,
      t: messages[locale],
      profile: profiles[locale],
    }
  }, [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
