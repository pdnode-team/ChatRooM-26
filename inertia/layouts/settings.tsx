import Page from '~/components/page'
import { type ReactNode } from 'react'
import NavLink, { type NavItem } from '~/components/nav_link'
import { Box, Card, CardContent, Paper, Stack } from '@mui/material'

const items: NavItem[] = []

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <Page title="Settings" description="Manage your account settings and preferences.">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: '240px minmax(0, 1fr)' },
          gap: 3,
          alignItems: 'start',
        }}
      >
        <Paper component="nav" aria-label="Settings" elevation={2} sx={{ p: 1.5 }}>
          <Stack direction={{ xs: 'row', md: 'column' }} spacing={0.5} sx={{ overflowX: 'auto' }}>
            {items.map(({ label, route, icon: Icon }) => (
              <NavLink key={label} route={route} exact>
                {Icon && <Icon size={16} />}
                {label}
              </NavLink>
            ))}
          </Stack>
        </Paper>
        <Card elevation={2} sx={{ minWidth: 0 }}>
          <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>{children}</CardContent>
        </Card>
      </Box>
    </Page>
  )
}
