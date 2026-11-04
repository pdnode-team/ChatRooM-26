import Page from '~/components/page'
import ChatLayout from '~/layouts/chat'
import { Card, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { MessageCircle } from 'lucide-react'

export default function Chat() {
  return (
    <Page title="Chat" description="Overview of your workspace and chat rooms.">
      <Card withBorder radius="md" padding="xl" my="auto">
        <Stack align="center" justify="center" gap="sm" ta="center" maw={460} mx="auto" py="xl">
          <ThemeIcon size={64} radius="xl" variant="light">
            <MessageCircle size={30} />
          </ThemeIcon>
          <Title order={3} fw={700}>
            Chat Rooms
          </Title>
          <Text c="dimmed">Welcome to ChatRooM. Select or create a room to start chatting.</Text>
        </Stack>
      </Card>
    </Page>
  )
}

Chat.layout = [ChatLayout]
