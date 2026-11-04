import { urlFor } from '~/client'
import { type ReactNode } from 'react'
import { usePage } from '@inertiajs/react'
import { Link } from '@adonisjs/inertia/react'
import FlashToasts from '~/components/flash_toasts'
import ThemeToggle from '~/components/theme_toggle'
import { Box, Button, Container, Group, Paper } from '@mantine/core'
import Logo from '~/components/logo'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  const { props } = usePage()

  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Paper
        component="header"
        radius={0}
        withBorder
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
        }}
      >
        <Container size="lg" h={60}>
          <Group h="100%" justify="space-between">
            <Logo />
            <Group gap="sm">
              <ThemeToggle />
              {props.user ? (
                <Link href={urlFor('dashboard')} style={{ textDecoration: 'none' }}>
                  <Button variant="filled">Go to Chat</Button>
                </Link>
              ) : (
                <>
                  <Link href={urlFor('session.create')} style={{ textDecoration: 'none' }}>
                    <Button variant="default">Sign in</Button>
                  </Link>

                  <Link href={urlFor('new_account.create')} style={{ textDecoration: 'none' }}>
                    <Button variant="filled">Get started</Button>
                  </Link>
                </>
              )}
            </Group>
          </Group>
        </Container>
      </Paper>

      <Box component="main" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </Box>
      <FlashToasts />
    </Box>
  )
}
