import { useMemo, type ReactNode } from 'react'
import { Moon, Sun } from 'lucide-react'
import {
  ActionIcon,
  MantineProvider,
  Tooltip,
  createTheme,
  useComputedColorScheme,
  useMantineColorScheme,
  type MantineColorScheme,
  type MantineColorSchemeManager,
} from '@mantine/core'
import { Notifications } from '@mantine/notifications'

const COOKIE = 'app_theme'
const ONE_YEAR = 60 * 60 * 24 * 365

type ThemeMode = 'light' | 'dark'

const theme = createTheme({
  primaryColor: 'blue',
  defaultRadius: 'md',
})

function createCookieColorSchemeManager(): MantineColorSchemeManager {
  return {
    get: (defaultValue) => {
      if (typeof document === 'undefined') {
        return defaultValue
      }
      const attr = document.documentElement.getAttribute('data-theme')
      if (attr === 'light' || attr === 'dark') {
        return attr
      }
      const match = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${COOKIE}=`))
        ?.split('=')[1]
      if (match === 'light' || match === 'dark' || match === 'auto') {
        return match as MantineColorScheme
      }
      return defaultValue
    },
    set: (value) => {
      if (typeof document !== 'undefined') {
        const resolved = value === 'dark' ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', resolved)
        document.cookie = `${COOKIE}=${resolved}; path=/; max-age=${ONE_YEAR}; samesite=lax`
      }
    },
    subscribe: () => {},
    unsubscribe: () => {},
    clear: () => {
      if (typeof document !== 'undefined') {
        document.cookie = `${COOKIE}=; path=/; max-age=0; samesite=lax`
      }
    },
  }
}

export function AppThemeProvider({
  initialTheme = 'light',
  children,
}: {
  initialTheme?: ThemeMode
  children: ReactNode
}) {
  const colorSchemeManager = useMemo(() => createCookieColorSchemeManager(), [])

  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme={initialTheme}
      colorSchemeManager={colorSchemeManager}
    >
      <Notifications position="top-center" />
      {children}
    </MantineProvider>
  )
}

export default function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })
  const isDark = computedColorScheme === 'dark'
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme'

  const handleToggle = () => {
    setColorScheme(isDark ? 'light' : 'dark')
  }

  return (
    <Tooltip label={label}>
      <ActionIcon onClick={handleToggle} variant="default" size="lg" radius="md" aria-label={label}>
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </ActionIcon>
    </Tooltip>
  )
}
