import Page from '~/components/page'
import ChatLayout, { type SpaceItem } from '~/layouts/chat'
import { Avatar, Card, Group, Stack, Text, ThemeIcon, Title, UnstyledButton } from '@mantine/core'
import { Link } from '@inertiajs/react'
import { ChevronRight, MessageCircle } from 'lucide-react'

const AVATAR_PALETTE = [
  'olive',
  'teal',
  'cyan',
  'blue',
  'indigo',
  'grape',
  'violet',
  'pink',
  'orange',
  'amber',
] as const

export function getSpaceColor(id: number | string): string {
  if (typeof id === 'number') {
    return AVATAR_PALETTE[Math.abs(id) % AVATAR_PALETTE.length]
  }

  let hash = 5381
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 33) ^ id.charCodeAt(i)
  }
  return AVATAR_PALETTE[Math.abs(hash) % AVATAR_PALETTE.length]
}

export default function Chat({ spaces = [] }: { spaces?: SpaceItem[] }) {
  const hasSpaces = spaces && spaces.length > 0

  return (
    <Page title="Home" description="Overview of your spaces">
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
                      color={getSpaceColor(space.id)}
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
                  <ChevronRight size={16} color="var(--mantine-color-gray-5)" />
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
