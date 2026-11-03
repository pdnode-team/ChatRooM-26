import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { Moon, Sun } from 'lucide-react'
import { usePage } from '@inertiajs/react'
import { CssBaseline, IconButton, ThemeProvider, Tooltip, createTheme } from '@mui/material'

const COOKIE = 'app_theme'
const ONE_YEAR = 60 * 60 * 24 * 365

type ThemeMode = 'light' | 'dark'

interface ThemeModeContextValue {
  mode: ThemeMode
  toggleTheme: () => void
}

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null)

export function AppThemeProvider({
  initialTheme = 'light',
  children,
}: {
  initialTheme?: ThemeMode
  children: ReactNode
}) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof document !== 'undefined') {
      const attr = document.documentElement.getAttribute('data-theme')
      if (attr === 'dark' || attr === 'light') return attr
    }
    return initialTheme
  })

  const toggleTheme = () => {
    setMode((prev) => {
      const next: ThemeMode = prev === 'dark' ? 'light' : 'dark'
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', next)
        document.cookie = `${COOKIE}=${next}; path=/; max-age=${ONE_YEAR}; samesite=lax`
      }
      return next
    })
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  default: '#f5f7fa',
                  paper: '#ffffff',
                },
              }
            : {
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
              }),
        },
        shape: {
          borderRadius: 8,
        },
      }),
    [mode]
  )

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default function ThemeToggle() {
  const ctx = useContext(ThemeModeContext)
  const page = usePage()
  const [fallbackTheme, setFallbackTheme] = useState<ThemeMode>(
    page.props.preferences?.theme ?? 'light'
  )

  const mode = ctx ? ctx.mode : fallbackTheme

  const handleToggle = () => {
    if (ctx) {
      ctx.toggleTheme()
    } else {
      const next: ThemeMode = fallbackTheme === 'dark' ? 'light' : 'dark'
      setFallbackTheme(next)
      document.documentElement.setAttribute('data-theme', next)
      document.cookie = `${COOKIE}=${next}; path=/; max-age=${ONE_YEAR}; samesite=lax`
    }
  }

  const isDark = mode === 'dark'
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <Tooltip title={label}>
      <IconButton onClick={handleToggle} aria-label={label} color="inherit">
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </IconButton>
    </Tooltip>
  )
}
