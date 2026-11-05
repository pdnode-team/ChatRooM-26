import { type ReactNode } from 'react'
import { AppShell, Box, Burger, Button, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MessageSquarePlus } from 'lucide-react'
import Logo from '~/components/logo'
import { CreateSpaceDialog } from '~/components/CreateSpaceDialog'

export default function ChatLayout({ children }: { children: ReactNode }) {
  const [sidebarOpened, { toggle: sidebarToggle }] = useDisclosure()
  const [createSpaceOpened, { open: createSpaceOpen, close: createSpaceClose }] =
    useDisclosure(false)

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
        <Button
          size="md"
          leftSection={<MessageSquarePlus size={20} />}
          variant="default"
          onClick={createSpaceOpen}
        >
          Create a new Space
        </Button>
        <CreateSpaceDialog opened={createSpaceOpened} onClose={createSpaceClose} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
