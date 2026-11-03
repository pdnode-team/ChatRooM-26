import { Stack, Typography } from '@mui/material'
import { Link } from '@adonisjs/inertia/react'
import { urlFor } from '~/client'

export default function Logo() {
  return (
    <Link href={urlFor('home')} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Stack direction="row" spacing={1.25} aria-label="ChatRooM" sx={{ alignItems: 'center' }}>
        <Typography variant="h6" component="span" sx={{ fontWeight: 700, letterSpacing: '-0.5px' }}>
          Pdnode ChatRooM
        </Typography>
      </Stack>
    </Link>
  )
}
