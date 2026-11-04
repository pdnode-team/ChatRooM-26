import { type ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import { Box, Container, Divider, Group, Stack, Text, Title } from '@mantine/core'

export default function Page({
  title,
  hideTitle = false,
  description,
  actions,
  children,
}: {
  title: string
  hideTitle?: boolean
  description?: ReactNode
  actions?: ReactNode
  children?: ReactNode
}) {
  const hasHeader = !hideTitle || description || actions

  return (
    <Container
      size="lg"
      py={{ base: 'lg', md: 'xl' }}
      style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}
    >
      <Head title={title} />
      {hasHeader && (
        <Box component="header" mb="lg">
          <Group justify="space-between" align="center" wrap="wrap" gap="md">
            <Stack gap={4}>
              {!hideTitle && (
                <Title order={2} fw={700}>
                  {title}
                </Title>
              )}
              {description && (
                <Text c="dimmed" size="md">
                  {description}
                </Text>
              )}
            </Stack>
            {actions && <Group gap="sm">{actions}</Group>}
          </Group>
          <Divider mt="md" />
        </Box>
      )}
      {children}
    </Container>
  )
}
