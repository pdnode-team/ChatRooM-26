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

export default function Signup() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  return (
    <Stack gap="lg">
      <Stack gap={6} align="center" ta="center">
        <Title order={2} fw={700}>
          Create your account
        </Title>
        <Text size="sm" c="dimmed">
          Join ChatRooM to start chatting
        </Text>
      </Stack>

      <Form route="new_account.store">
        {({ errors, processing }) => (
          <Stack gap="md">
            <TextInput
              key={form.key('fullName')}
              {...form.getInputProps('fullName')}
              id="fullName"
              name="fullName"
              type="text"
              label="Full name"
              autoComplete="name"
              placeholder="Ada Lovelace"
              error={errors.fullName}
            />

            <TextInput
              key={form.key('email')}
              {...form.getInputProps('email')}
              id="email"
              name="email"
              type="email"
              label="Email Address"
              autoComplete="email"
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
              placeholder="Create a password"
              autoComplete="new-password"
              required
              error={errors.password}
            />

            <PasswordInput
              key={form.key('passwordConfirmation')}
              {...form.getInputProps('passwordConfirmation')}
              id="passwordConfirmation"
              name="passwordConfirmation"
              label="Confirm password"
              placeholder="Repeat your password"
              autoComplete="new-password"
              required
              error={errors.passwordConfirmation}
            />

            <Button type="submit" size="md" fullWidth loading={processing} mt="xs">
              {processing ? 'One moment…' : 'Create account'}
            </Button>
          </Stack>
        )}
      </Form>

      <Divider />

      <Text size="sm" c="dimmed" ta="center">
        Already have an account?{' '}
        <Link href={urlFor('session.create')} style={{ textDecoration: 'none' }}>
          <Anchor component="span" fw={600} size="sm">
            Sign in
          </Anchor>
        </Link>
      </Text>
    </Stack>
  )
}

Signup.layout = [AuthLayout]
