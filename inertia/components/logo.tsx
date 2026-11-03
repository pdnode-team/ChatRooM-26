import { Avatar, Stack, Typography } from '@mui/material'
import { MessageSquare } from 'lucide-react'
import { Link } from '@adonisjs/inertia/react'

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <Stack
      component={Link}
      route="home"
      direction="row"
      spacing={1.25}
      alignItems="center"
      aria-label="ChatRooM"
      sx={{
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      <Avatar
        variant="rounded"
        sx={{
          width: size,
          height: size,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
        }}
      >
        <MessageSquare size={Math.round(size * 0.56)} />
      </Avatar>
      <Typography variant="h6" component="span" fontWeight={700} letterSpacing="-0.01em">
        ChatRooM
      </Typography>
    </Stack>
  )
}
