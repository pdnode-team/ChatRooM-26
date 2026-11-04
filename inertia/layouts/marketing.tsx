import { urlFor } from '~/client'
import { type ReactNode } from 'react'
import { usePage, Link } from '@inertiajs/react'
import FlashToasts from '~/components/flash_toasts'
import ThemeToggle from '~/components/theme_toggle'
import { AppBar, Box, Button, Container, Stack, Toolbar } from '@mui/material'
import Logo from '~/components/logo'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  const { props } = usePage()
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" color="default">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Logo />
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <ThemeToggle />
              {props.user ? (
                <Link href={urlFor('dashboard')}>
                  <Button variant="contained" color="primary">
                    Go to Chat
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href={urlFor('session.create')}>
                    <Button variant="outlined" color="primary">
                      Sign in
                    </Button>
                  </Link>

                  <Link href={urlFor('new_account.create')}>
                    <Button variant="contained" color="primary">
                      Get started
                    </Button>
                  </Link>
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
