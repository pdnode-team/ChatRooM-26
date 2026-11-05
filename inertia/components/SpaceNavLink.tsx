import { Avatar, NavLink, Text } from '@mantine/core'
import { Link } from '@inertiajs/react'

export interface SpaceItem {
  id: number
  name: string | null
  type: 'ROOM' | 'DM' | 'GROUP_DM'
  avatar: string | null
}

interface SpaceNavLinkProps {
  space: SpaceItem
  active?: boolean
  onClick?: () => void
}

export function SpaceNavLink({ space, active, onClick }: SpaceNavLinkProps) {
  const displayName = space.name || 'Direct Message'
  const fallbackInitial = displayName.trim().charAt(0).toUpperCase() || '#'

  return (
    <NavLink
      component={Link}
      href={`/spaces/${space.id}`}
      active={active}
      onClick={onClick}
      label={
        <Text size="sm" fw={500} truncate>
          {displayName}
        </Text>
      }
      leftSection={
        <Avatar src={space.avatar} alt={displayName} radius="md" size={32} color="olive">
          {fallbackInitial}
        </Avatar>
      }
      color="olive"
      variant="light"
      my={2}
    />
  )
}
