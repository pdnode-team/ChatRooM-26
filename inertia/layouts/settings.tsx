import Page from '~/components/page'
import { type ReactNode } from 'react'
import NavLink, { type NavItem } from '~/components/nav_link'
import { Card, Grid, Paper, Stack } from '@mantine/core'

const items: NavItem[] = []

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <Page title="Settings" description="Manage your account settings and preferences.">
      <Grid gap="lg" align="flex-start">
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Paper component="nav" aria-label="Settings" withBorder p="xs" radius="md">
            <Stack gap={4}>
              {items.map(({ label, route, icon: Icon }) => (
                <NavLink key={label} route={route} exact>
                  {Icon && <Icon size={16} />}
                  {label}
                </NavLink>
              ))}
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Card withBorder radius="md" padding="xl">
            {children}
          </Card>
        </Grid.Col>
      </Grid>
    </Page>
  )
}
