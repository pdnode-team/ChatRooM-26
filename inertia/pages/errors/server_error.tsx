import { urlFor } from '~/client'
import { Link } from '@adonisjs/inertia/react'
import { ServerCrash } from 'lucide-react'
import MarketingLayout from '~/layouts/marketing'
import { Badge, Button, Card, Container, Stack, Text, ThemeIcon, Title } from '@mantine/core'

export default function ServerError() {
  return (
    <Container
      size="sm"
      py={64}
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Card withBorder shadow="sm" radius="md" padding="xl" w="100%" ta="center">
        <Stack align="center" gap="md" py="md">
          <ThemeIcon size={64} radius="xl" color="red" variant="light">
            <ServerCrash size={32} />
          </ThemeIcon>
          <Badge color="red" variant="light" size="md">
            Error 500
          </Badge>
          <Title order={2} fw={700}>
            Internal Server Error
          </Title>
          <Text c="dimmed" maw={420}>
            Try again in a moment. If the problem persists, check the server logs for the underlying
            exception.
          </Text>
          <Link href={urlFor('home')} style={{ textDecoration: 'none' }}>
            <Button variant="filled" color="red" mt="xs">
              Back to Home
            </Button>
          </Link>
        </Stack>
      </Card>
    </Container>
  )
}

ServerError.layout = [MarketingLayout]
