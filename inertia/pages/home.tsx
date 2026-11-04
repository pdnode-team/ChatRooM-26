import { urlFor } from '~/client'
import { usePage } from '@inertiajs/react'
import { Link } from '@adonisjs/inertia/react'
import { Gauge, Layers, Globe } from 'lucide-react'
import MarketingLayout from '~/layouts/marketing'
import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'

const features = [
  {
    icon: Globe,
    title: 'Open Source',
    description: 'We love open source! Open source gives people freedom and transparency',
  },
  {
    icon: Layers,
    title: 'Mantine UI Design',
    description:
      'Clean, accessible, and customizable components powered by Mantine UI with seamless dark and light mode support.',
  },
  {
    icon: Gauge,
    title: 'Easy to use',
    description:
      'We will try our best to improve the user experience and make it as easy as it can!',
  },
]

export default function Home() {
  const { props } = usePage()

  return (
    <Container size="lg" py={{ base: 48, md: 80 }}>
      <Stack align="center" ta="center" maw={680} mx="auto" mb={64} gap="lg">
        <Badge variant="light" size="lg" radius="xl">
          Real-time Communication
        </Badge>

        <Title
          order={1}
          fw={800}
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
            lineHeight: 1.15,
          }}
        >
          Pdnode ChatRooM
        </Title>

        <Text size="lg" c="dimmed">
          A clean, fast, and modern full-stack chat platform built with React and Mantine UI.
        </Text>

        <Group justify="center" gap="md" pt="xs">
          {props.user ? (
            <Link href={urlFor('dashboard')} style={{ textDecoration: 'none' }}>
              <Button size="lg" radius="md" px="xl">
                Go to Chat
              </Button>
            </Link>
          ) : (
            <>
              <Link href={urlFor('new_account.create')} style={{ textDecoration: 'none' }}>
                <Button size="lg" radius="md" px="xl">
                  Get Started
                </Button>
              </Link>
              <Link href={urlFor('session.create')} style={{ textDecoration: 'none' }}>
                <Button variant="default" size="lg" radius="md" px="xl">
                  Sign In
                </Button>
              </Link>
            </>
          )}
        </Group>
      </Stack>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title} shadow="sm" padding="xl" radius="md" withBorder>
            <ThemeIcon size={48} radius="md" variant="light" mb="md">
              <Icon size={24} />
            </ThemeIcon>
            <Text fw={700} fz="lg" mb="xs">
              {title}
            </Text>
            <Text size="sm" c="dimmed" lh={1.6}>
              {description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}

Home.layout = [MarketingLayout]
