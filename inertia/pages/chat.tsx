import Page from '~/components/page'
import ChatLayout from '~/layouts/chat'
import { Card, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { MessageCircle } from 'lucide-react'

export default function Chat({ spaces }: { spaces: any }) {
  console.log(spaces)
  return (
    <Page title="Home" description="Overview of your spaces and chat rooms.">
      <Card withBorder radius="md" padding="xl" my="auto">
        <Stack align="center" justify="center" gap="sm" ta="center" maw={460} mx="auto" py="xl">
          <ThemeIcon size={64} radius="xl" variant="light">
            <MessageCircle size={30} />
          </ThemeIcon>
          <Title order={3} fw={700}>
            Hmmm Empty?
          </Title>
          <Text c="dimmed">Don't let your Home empty, start chatting!</Text>
        </Stack>
      </Card>
    </Page>
  )
}

Chat.layout = [ChatLayout]
