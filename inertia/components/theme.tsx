import { type ReactNode } from 'react'
import { MantineProvider, createTheme, type MantineColorsTuple } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

const customOlive: MantineColorsTuple = [
  '#f5faf0',
  '#e9f5db',
  '#cfe1b9',
  '#b5c99a',
  '#97a97c',
  '#87986a',
  '#718355',
  '#5b6b44',
  '#465234',
  '#313a24',
]

const theme = createTheme({
  colors: {
    olive: customOlive,
  },
  primaryColor: 'olive',
  primaryShade: 6,
  defaultRadius: 'md',
})

export function AppThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light" forceColorScheme="light">
      <Notifications position="top-center" />
      {children}
    </MantineProvider>
  )
}
