import { Group, Text } from '@mantine/core'
import { Link } from '@adonisjs/inertia/react'
import { urlFor } from '~/client'

export default function Logo() {
  return (
    <Link href={urlFor('home')} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Group gap="xs" aria-label="ChatRooM" align="center">
        <Text fw={800} size="lg" style={{ letterSpacing: '-0.5px' }}>
          Pdnode ChatRooM
        </Text>
      </Group>
    </Link>
  )
}
