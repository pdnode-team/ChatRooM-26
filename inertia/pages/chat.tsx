import Page from '~/components/page'
import ChatLayout, { type SpaceItem } from '~/layouts/chat'
import {
  Avatar,
  Badge,
  Card,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
} from '@mantine/core'
import { Link } from '@inertiajs/react'
import { ChevronRight, Hash, Lock, MessageCircle, Users } from 'lucide-react'

const spaceTypeConfig: Record<SpaceItem['type'], { label: string; icon: typeof Hash }> = {
  ROOM: { label: 'Room', icon: Hash },
  DM: { label: 'Direct', icon: Lock },
  GROUP_DM: { label: 'Group', icon: Users },
}

export default function Chat({ spaces = [] }: { spaces?: SpaceItem[] }) {
  const hasSpaces = spaces && spaces.length > 0

  return (
    <Page title="Home" description="Overview of your spaces and chat rooms.">
      {!hasSpaces ? (
        <Card withBorder radius="md" padding="xl" my="auto">
          <Stack align="center" justify="center" gap="sm" ta="center" maw={460} mx="auto" py="xl">
            <ThemeIcon size={64} radius="xl" variant="light" color="olive">
              <MessageCircle size={30} />
            </ThemeIcon>
            <Title order={3} fw={700}>
              Hmmm Empty?
            </Title>
            <Text c="dimmed">Don't let your Home empty, start chatting!</Text>
          </Stack>
        </Card>
      ) : (
        <Stack gap="xs">
          {spaces.map((space) => {
            const displayName = space.name || 'Direct Message'
            const initial = displayName.trim().charAt(0).toUpperCase() || '#'
            const config = spaceTypeConfig[space.type] || spaceTypeConfig.ROOM
            const Icon = config.icon

            return (
              <UnstyledButton
                key={space.id}
                component={Link}
                href={`/spaces/${space.id}`}
                p="sm"
                style={{
                  display: 'block',
                  width: '100%',
                  borderRadius: 'var(--mantine-radius-md)',
                  border: '1px solid var(--mantine-color-gray-2)',
                  backgroundColor: 'var(--mantine-color-white)',
                  transition: 'background-color 150ms ease, border-color 150ms ease',
                }}
                styles={{
                  root: {
                    '&:hover': {
                      backgroundColor: 'var(--mantine-color-olive-0)',
                      borderColor: 'var(--mantine-color-olive-3)',
                    },
                  },
                }}
              >
                <Group justify="space-between" wrap="nowrap">
                  <Group gap="sm" wrap="nowrap" style={{ minWidth: 0 }}>
                    <Avatar
                      src={space.avatar}
                      alt={displayName}
                      radius="md"
                      size={40}
                      color="olive"
                    >
                      {initial}
                    </Avatar>

                    <div style={{ minWidth: 0 }}>
                      <Text fw={600} size="sm" truncate>
                        {displayName}
                      </Text>
                      {/* <Text size="xs" c="dimmed" truncate>
                        Click to enter this space
                      </Text> */}
                    </div>
                  </Group>
                  <Group gap="xs" wrap="nowrap">
                    <Badge size="sm" variant="light" color="olive" leftSection={<Icon size={12} />}>
                      {config.label}
                    </Badge>
                    <ChevronRight size={16} color="var(--mantine-color-gray-5)" />
                  </Group>
                </Group>
              </UnstyledButton>
            )
          })}
        </Stack>
      )}
    </Page>
  )
}

Chat.layout = (page: React.ReactNode) => <ChatLayout>{page}</ChatLayout>
