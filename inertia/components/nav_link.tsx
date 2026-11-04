import { urlFor } from '~/client'
import { usePage } from '@inertiajs/react'
import { type LucideIcon } from 'lucide-react'
import { type ReactNode } from 'react'
import { Link } from '@adonisjs/inertia/react'
import { Button } from '@mantine/core'

export type NavRoute = Parameters<typeof urlFor>[0]

export type NavItem = {
  label: string
  route: NavRoute
  icon?: LucideIcon
}

export default function NavLink({
  route,
  exact = false,
  className,
  children,
}: {
  route: NavRoute
  exact?: boolean
  className?: string
  children: ReactNode
}) {
  const { url } = usePage()
  const href = urlFor(route)
  const path = url.split('?')[0]
  const isActive = exact ? path === href : path === href || path.startsWith(`${href}/`)

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Button
        className={className}
        aria-current={isActive ? 'page' : undefined}
        variant={isActive ? 'light' : 'subtle'}
        color={isActive ? 'blue' : 'gray'}
        size="sm"
        justify="flex-start"
        fw={isActive ? 600 : 500}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>{children}</span>
      </Button>
    </Link>
  )
}
