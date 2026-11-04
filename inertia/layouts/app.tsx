import Logo from '~/components/logo'
import { type ReactNode } from 'react'
import { MessageCircle, LogOut } from 'lucide-react'
import { Form } from '@adonisjs/inertia/react'
import FlashToasts from '~/components/flash_toasts'
import NavLink, { type NavItem } from '~/components/nav_link'
import { Box, Button, Container, Divider, Group, Paper } from '@mantine/core'

const nav: NavItem[] = [{ label: 'Go to Chat', route: 'dashboard', icon: MessageCircle }]

export default function AppLayout({ children }: { children: ReactNode }) {
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
          <Group h="100%" justify="space-between" gap="md">
            <Group gap="md">
              <Logo />
              <Divider orientation="vertical" />
              <Group component="nav" gap="xs">
                {nav.map(({ label, route, icon: Icon }) => (
                  <NavLink key={label} route={route}>
                    {Icon && <Icon size={16} />}
                    {label}
                  </NavLink>
                ))}
              </Group>
            </Group>

            <Group gap="sm">
              <Form route="session.destroy">
                <Button
                  type="submit"
                  variant="light"
                  color="red"
                  size="sm"
                  leftSection={<LogOut size={16} />}
                >
                  Log out
                </Button>
              </Form>
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
