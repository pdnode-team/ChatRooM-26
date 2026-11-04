import AuthLayout from '~/layouts/auth'
import { urlFor } from '~/client'
import { Form, Link } from '@adonisjs/inertia/react'
import { useForm } from '@mantine/form'
import {
  Anchor,
  Button,
  Divider,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'

export default function Login() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
  })

  return (
    <Stack gap="lg">
      <Stack gap={6} align="center" ta="center">
        <Title order={2} fw={700}>
          Welcome back
        </Title>
        <Text size="sm" c="dimmed">
          Sign in to continue to ChatRooM
        </Text>
      </Stack>

      <Form route="session.store">
        {({ errors, processing }) => (
          <Stack gap="md">
            <TextInput
              key={form.key('email')}
              {...form.getInputProps('email')}
              id="email"
              name="email"
              type="email"
              label="Email Address"
              autoComplete="username"
              placeholder="you@example.com"
              required
              error={errors.email}
            />

            <PasswordInput
              key={form.key('password')}
              {...form.getInputProps('password')}
              id="password"
              name="password"
              label="Password"
              placeholder="Your password"
              autoComplete="current-password"
              required
              error={errors.password}
            />

            <Button type="submit" size="md" fullWidth loading={processing} mt="xs">
              {processing ? 'One moment…' : 'Sign in'}
            </Button>
          </Stack>
        )}
      </Form>

      <Divider />

      <Text size="sm" c="dimmed" ta="center">
        New here?{' '}
        <Link href={urlFor('new_account.create')} style={{ textDecoration: 'none' }}>
          <Anchor component="span" fw={600} size="sm">
            Create an account
          </Anchor>
        </Link>
      </Text>
    </Stack>
  )
}

Login.layout = [AuthLayout]
