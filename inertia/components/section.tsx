import { type ReactNode } from 'react'
import { Card, Divider, Stack, Text, Title } from '@mantine/core'

export default function Section({
  title,
  description,
  children,
}: {
  title?: string
  description?: ReactNode
  children: ReactNode
}) {
  return (
    <Card component="section" withBorder radius="md" padding="lg" mb="lg">
      {(title || description) && (
        <>
          <Card.Section inheritPadding py="md">
            <Stack gap={4}>
              {title && (
                <Title order={4} fw={600}>
                  {title}
                </Title>
              )}
              {description && (
                <Text size="sm" c="dimmed">
                  {description}
                </Text>
              )}
            </Stack>
          </Card.Section>
          <Card.Section>
            <Divider />
          </Card.Section>
        </>
      )}
      <Stack gap="md" pt={title || description ? 'md' : 0}>
        {children}
      </Stack>
    </Card>
  )
}
