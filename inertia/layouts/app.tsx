import Logo from '~/components/logo'
import { type ReactNode } from 'react'
import { House, LogOut } from 'lucide-react'
import { Form } from '@adonisjs/inertia/react'
import FlashToasts from '~/components/flash_toasts'
import ThemeToggle from '~/components/theme_toggle'
import NavLink, { type NavItem } from '~/components/nav_link'
import { AppBar, Box, Button, Container, Divider, Stack, Toolbar } from '@mui/material'

const nav: NavItem[] = [{ label: 'Dashboard', route: 'dashboard', icon: House }]

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" color="default">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 3 }}>
            <Logo />

            <Divider orientation="vertical" flexItem sx={{ my: 1.5 }} />

            <Stack component="nav" direction="row" spacing={1} sx={{ flexGrow: 1 }}>
              {nav.map(({ label, route, icon: Icon }) => (
                <NavLink key={label} route={route}>
                  {Icon && <Icon size={16} />}
                  {label}
                </NavLink>
              ))}
            </Stack>

            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <ThemeToggle />
              <Form route="session.destroy">
                <Button
                  type="submit"
                  variant="outlined"
                  color="error"
                  size="small"
                  startIcon={<LogOut size={16} />}
                >
                  Log out
                </Button>
              </Form>
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
