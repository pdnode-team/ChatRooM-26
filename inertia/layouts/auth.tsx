import Logo from '~/components/logo'
import { type ReactNode } from 'react'
import FlashToasts from '~/components/flash_toasts'
import ThemeToggle from '~/components/theme_toggle'
import { AppBar, Box, Card, CardContent, Container, Toolbar } from '@mui/material'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" color="default" elevation={1}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Logo />
            <ThemeToggle />
          </Toolbar>
        </Container>
      </AppBar>

      <Container
        component="main"
        maxWidth="xs"
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 6,
        }}
      >
        <Card elevation={4} sx={{ width: '100%', borderRadius: 3 }}>
          <CardContent sx={{ p: { xs: 3, sm: 4 } }}>{children}</CardContent>
        </Card>
      </Container>
      <FlashToasts />
    </Box>
  )
}
