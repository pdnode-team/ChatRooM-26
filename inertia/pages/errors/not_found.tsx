import { urlFor } from '~/client'
import { Link } from '@adonisjs/inertia/react'
import { FileQuestion } from 'lucide-react'
import MarketingLayout from '~/layouts/marketing'
import { Badge, Button, Card, Container, Stack, Text, ThemeIcon, Title } from '@mantine/core'

export default function NotFound() {
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
          <ThemeIcon size={64} radius="xl" color="yellow" variant="light">
            <FileQuestion size={32} />
          </ThemeIcon>
          <Badge color="yellow" variant="light" size="md">
            Error 404
          </Badge>
          <Title order={2} fw={700}>
            Page Not Found
          </Title>
          <Text c="dimmed" maw={420}>
            The page you tried to reach doesn&apos;t exist. Check the URL or head back home.
          </Text>
          <Link href={urlFor('home')} style={{ textDecoration: 'none' }}>
            <Button variant="filled" mt="xs">
              Back to Home
            </Button>
          </Link>
        </Stack>
      </Card>
    </Container>
  )
}

NotFound.layout = [MarketingLayout]
