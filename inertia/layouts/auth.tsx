import Logo from '~/components/logo'
import { type ReactNode } from 'react'
import FlashToasts from '~/components/flash_toasts'
import ThemeToggle from '~/components/theme_toggle'
import { Box, Container, Group, Paper } from '@mantine/core'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Paper
        component="header"
        radius={0}
        withBorder
        style={{ borderTop: 0, borderLeft: 0, borderRight: 0 }}
      >
        <Container size="lg" h={60}>
          <Group h="100%" justify="space-between">
            <Logo />
            <ThemeToggle />
          </Group>
        </Container>
      </Paper>

      <Container
        component="main"
        size={420}
        py="xl"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Paper withBorder shadow="sm" p={30} radius="md" w="100%">
          {children}
        </Paper>
      </Container>
      <FlashToasts />
    </Box>
  )
}
