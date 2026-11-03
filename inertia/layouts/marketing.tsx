import Logo from '~/components/logo'
import { urlFor } from '~/client'
import { type ReactNode } from 'react'
import { usePage } from '@inertiajs/react'
import { Link } from '@adonisjs/inertia/react'
import FlashToasts from '~/components/flash_toasts'
import ThemeToggle from '~/components/theme_toggle'
import { AppBar, Box, Button, Container, Stack, Toolbar } from '@mui/material'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  const { props } = usePage()
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" color="default" elevation={2}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Logo size={34} />
            <Stack direction="row" spacing={1.5} alignItems="center">
              <ThemeToggle />
              {props.user ? (
                <Button
                  component={Link}
                  href={urlFor('dashboard')}
                  variant="contained"
                  color="primary"
                >
                  Dashboard
                </Button>
              ) : (
                <>
                  <Button
                    component={Link}
                    href={urlFor('session.create')}
                    variant="outlined"
                    color="primary"
                  >
                    Sign in
                  </Button>
                  <Button
                    component={Link}
                    href={urlFor('new_account.create')}
                    variant="contained"
                    color="primary"
                  >
                    Get started
                  </Button>
                </>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="main" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </Box>
      <FlashToasts />
    </Box>
  )
}
