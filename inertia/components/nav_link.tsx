import { urlFor } from '~/client'
import { usePage } from '@inertiajs/react'
import { type LucideIcon } from 'lucide-react'
import { type ReactNode } from 'react'
import { Link } from '@adonisjs/inertia/react'
import { Button } from '@mui/material'

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
    <Link href={href}>
      <Button
        className={className}
        aria-current={isActive ? 'page' : undefined}
        variant={isActive ? ('tonal' in Button ? 'contained' : 'contained') : 'text'}
        color={isActive ? 'primary' : 'inherit'}
        size="small"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 1,
          px: 2,
          py: 0.75,
          textTransform: 'none',
          fontWeight: isActive ? 600 : 500,
        }}
      >
        {children}
      </Button>
    </Link>
  )
}
