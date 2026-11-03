import AuthLayout from '~/layouts/auth'
import { urlFor } from '~/client'
import { UserPlus } from 'lucide-react'
import { Form, Link } from '@adonisjs/inertia/react'
import { Avatar, Button, Divider, Link as MuiLink, Stack, TextField, Typography } from '@mui/material'

export default function Signup() {
  return (
    <Stack spacing={3}>
      <Stack alignItems="center" spacing={1} textAlign="center">
        <Avatar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', width: 48, height: 48 }}>
          <UserPlus size={22} />
        </Avatar>
        <Typography variant="h5" component="h1" fontWeight={700}>
          Create your account
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Join ChatRooM to start chatting
        </Typography>
      </Stack>

      <Form route="new_account.store">
        {({ errors, processing }) => (
          <Stack spacing={2.5}>
            <TextField
              id="fullName"
              name="fullName"
              type="text"
              label="Full name"
              autoComplete="name"
              placeholder="Ada Lovelace"
              fullWidth
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
            />

            <TextField
              id="email"
              name="email"
              type="email"
              label="Email Address"
              autoComplete="email"
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
              autoComplete="new-password"
              fullWidth
              error={Boolean(errors.password)}
              helperText={errors.password}
            />

            <TextField
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              label="Confirm password"
              autoComplete="new-password"
              fullWidth
              error={Boolean(errors.passwordConfirmation)}
              helperText={errors.passwordConfirmation}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={processing}
            >
              {processing ? 'One moment…' : 'Create account'}
            </Button>
          </Stack>
        )}
      </Form>

      <Divider />

      <Typography variant="body2" color="text.secondary" textAlign="center">
        Already have an account?{' '}
        <MuiLink
          component={Link}
          href={urlFor('session.create')}
          underline="hover"
          fontWeight={600}
        >
          Sign in
        </MuiLink>
      </Typography>
    </Stack>
  )
}

Signup.layout = [AuthLayout]
