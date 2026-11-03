import AuthLayout from '~/layouts/auth'
import { urlFor } from '~/client'
import { Lock } from 'lucide-react'
import { Form, Link } from '@adonisjs/inertia/react'
import { Avatar, Button, Divider, Link as MuiLink, Stack, TextField, Typography } from '@mui/material'

export default function Login() {
  return (
    <Stack spacing={3}>
      <Stack alignItems="center" spacing={1} textAlign="center">
        <Avatar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', width: 48, height: 48 }}>
          <Lock size={22} />
        </Avatar>
        <Typography variant="h5" component="h1" fontWeight={700}>
          Welcome back
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sign in to continue to ChatRooM
        </Typography>
      </Stack>

      <Form route="session.store">
        {({ errors, processing }) => (
          <Stack spacing={2.5}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email Address"
              autoComplete="username"
              placeholder="you@example.com"
              fullWidth
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              autoComplete="current-password"
              fullWidth
              error={Boolean(errors.password)}
              helperText={errors.password}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={processing}
            >
              {processing ? 'One moment…' : 'Sign in'}
            </Button>
          </Stack>
        )}
      </Form>

      <Divider />

      <Typography variant="body2" color="text.secondary" textAlign="center">
        New here?{' '}
        <MuiLink
          component={Link}
          href={urlFor('new_account.create')}
          underline="hover"
          fontWeight={600}
        >
          Create an account
        </MuiLink>
      </Typography>
    </Stack>
  )
}

Login.layout = [AuthLayout]
