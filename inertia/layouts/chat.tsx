import { type ReactNode } from 'react'
import {
  AppShell,
  Avatar,
  Burger,
  Button,
  Group,
  NavLink,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link, usePage } from '@inertiajs/react'
import { MessageSquarePlus } from 'lucide-react'
import Logo from '~/components/logo'
import { CreateSpaceDialog } from '~/components/CreateSpaceDialog'
import { getSpaceColor } from '~/pages/chat'

export interface SpaceItem {
  id: number
  name: string | null
  type: 'ROOM' | 'DM' | 'GROUP_DM'
  avatar: string | null
}

interface PageProps {
  spaces?: SpaceItem[]
  [key: string]: unknown
}

export default function ChatLayout({ children }: { children: ReactNode }) {
  const [sidebarOpened, { toggle: sidebarToggle, close: sidebarClose }] = useDisclosure()
  const [createSpaceOpened, { open: createSpaceOpen, close: createSpaceClose }] =
    useDisclosure(false)

  const { props, url } = usePage<PageProps>()
  const spaces = props.spaces ?? []

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !sidebarOpened } }}
      padding="md"
    >
      <AppShell.Header p="sm">
        <Group h="100%" px="md">
          <Burger
            opened={sidebarOpened}
            onClick={sidebarToggle}
            hiddenFrom="sm"
            size="sm"
            aria-label="Toggle navigation"
          />
          <Logo />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section mb="sm">
          <Button
            fullWidth
            size="md"
            leftSection={<MessageSquarePlus size={20} />}
            variant="default"
            onClick={createSpaceOpen}
          >
            Create a new Space
          </Button>
        </AppShell.Section>

        <AppShell.Section grow component={ScrollArea}>
          <Stack gap={4}>
            {spaces.length === 0 ? (
              <Text size="xs" c="dimmed" ta="center" py="xl">
                No spaces yet. Create one!
              </Text>
            ) : (
              spaces.map((space) => {
                const displayName = space.name || 'Direct Message'
                const initial = displayName.trim().charAt(0).toUpperCase() || '#'
                const isActive = url.startsWith(`/spaces/${space.id}`)

                return (
                  <NavLink
                    key={space.id}
                    component={Link}
                    href={`/spaces/${space.id}`}
                    active={isActive}
                    onClick={sidebarClose}
                    color="olive"
                    variant="light"
                    style={{ borderRadius: 'var(--mantine-radius-md)' }}
                    label={
                      <Text size="sm" fw={500} truncate>
                        {displayName}
                      </Text>
                    }
                    leftSection={
                      <Avatar
                        src={space.avatar}
                        alt={displayName}
                        radius="md"
                        size={32}
                        color={getSpaceColor(space.id)}
                      >
                        {initial}
                      </Avatar>
                    }
                  />
                )
              })
            )}
          </Stack>
        </AppShell.Section>

        <CreateSpaceDialog opened={createSpaceOpened} onClose={createSpaceClose} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
