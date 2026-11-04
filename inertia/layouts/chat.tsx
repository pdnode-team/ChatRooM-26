import { type ReactNode } from 'react'
import { AppShell, Box, Burger, Button, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MessageSquarePlus } from 'lucide-react'
import Logo from '~/components/logo'

export default function ChatLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header p="sm">
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            aria-label="Toggle navigation"
          />
          <Logo />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Button size="md" leftSection={<MessageSquarePlus size={20} />} variant="default">
          Create a new Chat
        </Button>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
