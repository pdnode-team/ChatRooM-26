import { useState } from 'react'
import AuthLayout from '~/layouts/auth'
import { urlFor } from '~/client'
import { Form, Link } from '@adonisjs/inertia/react'
import { useForm } from '@mantine/form'
import {
  Anchor,
  Button,
  Divider,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

export default function Signup() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [checkingEmail, setCheckingEmail] = useState(false)
  const [emailCheckError, setEmailCheckError] = useState<string | null>(null)

  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      fullName: '',
      password: '',
      passwordConfirmation: '',
      terms: false,
    },
    clearInputErrorOnChange: true,
    mode: 'controlled',
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email address'),
      username: (val) => (val.trim().length >= 3 ? null : 'Username must be at least 3 characters'),
      password: (val) => (val.length >= 8 ? null : 'Password must be at least 8 characters'),
      passwordConfirmation: (val, values) =>
        val === values.password ? null : 'Passwords do not match',
      terms: (val) => (val ? null : 'You must accept the terms to continue'),
    },
  })

  const handleNextStep1 = async () => {
    form.clearFieldError('email')
    setEmailCheckError(null)

    const currentEmail = form.getValues().email?.trim()
    if (!currentEmail || form.validateField('email').hasError) return

    setCheckingEmail(true)
    try {
      const res = await fetch(`/api/users/check-email?email=${encodeURIComponent(currentEmail)}`, {
        headers: { Accept: 'application/json' },
      })
      const data = await res.json()

      if (data.exists) {
        form.setFieldError('email', 'This email is already in use. Please sign in instead.')
        return
      }

      setStep(2)
    } catch {
      setEmailCheckError('Failed to check email. Please try again.')
    } finally {
      setCheckingEmail(false)
    }
  }

  const [checkingUsername, setCheckingUsername] = useState(false)

  const handleNextStep2 = async () => {
    form.clearFieldError('username')
    const errUsername = form.validateField('username')
    const errPassword = form.validateField('password')
    const errConfirm = form.validateField('passwordConfirmation')

    if (errUsername.hasError || errPassword.hasError || errConfirm.hasError) {
      return
    }

    const currentUsername = form.getValues().username?.trim()
    if (!currentUsername) return

    setCheckingUsername(true)
    try {
      const res = await fetch(
        `/api/users/check-username?username=${encodeURIComponent(currentUsername)}`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )

      const { exists }: { exists: boolean } = await res.json()

      if (exists || res.status == 422) {
        form.setFieldError('username', 'This username is already taken.')
        return
      }

      setStep(3)
    } catch {
      form.setFieldError('username', 'Failed to verify username. Please try again.')
    } finally {
      setCheckingUsername(false)
    }
  }
  return (
    <Stack gap="lg">
      <Stack gap={6} align="center" ta="center">
        <Title order={2} fw={700}>
          {step === 1 && 'Enter your email'}
          {step === 2 && 'Set up your profile'}
          {step === 3 && 'Terms & Confirmation'}
        </Title>
        <Text size="sm" c="dimmed">
          {step === 1 && "We'll check if you already have an account."}
          {step === 2 && 'Choose your username, display name, and password.'}
          {step === 3 && 'Almost done! Review and accept the terms.'}
        </Text>
      </Stack>

      <Form
        route="new_account.store"
        onSubmit={(e) => {
          if (step !== 3) {
            e.preventDefault()
            if (step === 1) handleNextStep1()
            if (step === 2) handleNextStep2()
          }
        }}
      >
        {({ errors, processing }) => (
          <Stack gap="md">
            {step === 1 && (
              <>
                <TextInput
                  {...form.getInputProps('email')}
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  error={emailCheckError || form.errors.email || errors.email}
                />

                <Button
                  size="md"
                  fullWidth
                  color="olive"
                  loading={checkingEmail}
                  rightSection={<ArrowRight size={16} />}
                  onClick={handleNextStep1}
                  mt="xs"
                  type="button"
                >
                  Continue
                </Button>
              </>
            )}

            {step === 2 && (
              <>
                <input type="hidden" name="email" value={form.values.email} />

                <TextInput
                  {...form.getInputProps('username')}
                  id="username"
                  name="username"
                  label="Username"
                  placeholder="username"
                  required
                  error={form.errors.username || errors.username}
                />

                <TextInput
                  {...form.getInputProps('fullName')}
                  id="fullName"
                  name="fullName"
                  label="Display Name (Optional)"
                  placeholder="Your Name"
                  error={errors.fullName}
                />

                <PasswordInput
                  {...form.getInputProps('password')}
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  required
                  error={form.errors.password || errors.password}
                />

                <PasswordInput
                  {...form.getInputProps('passwordConfirmation')}
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  label="Confirm Password"
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  required
                  error={form.errors.passwordConfirmation || errors.passwordConfirmation}
                />

                <Group justify="space-between" mt="xs">
                  <Button
                    variant="subtle"
                    leftSection={<ArrowLeft size={16} />}
                    onClick={() => setStep(1)}
                    type="button"
                  >
                    Back
                  </Button>
                  <Button
                    color="olive"
                    rightSection={<ArrowRight size={16} />}
                    onClick={handleNextStep2}
                    loading={checkingUsername}
                    type="button"
                  >
                    Continue
                  </Button>
                </Group>
              </>
            )}

            {step === 3 && (
              <>
                <input type="hidden" name="email" value={form.values.email} />
                <input type="hidden" name="username" value={form.values.username} />
                <input type="hidden" name="fullName" value={form.values.fullName} />
                <input type="hidden" name="password" value={form.values.password} />
                <input
                  type="hidden"
                  name="passwordConfirmation"
                  value={form.values.passwordConfirmation}
                />

                <Stack
                  gap="xs"
                  p="sm"
                  bg="gray.0"
                  style={{ borderRadius: 'var(--mantine-radius-md)' }}
                >
                  <Text size="sm">
                    <strong>Email:</strong> {form.values.email}
                  </Text>
                  <Text size="sm">
                    <strong>Username:</strong> @{form.values.username}
                  </Text>
                </Stack>

                <Group justify="space-between" mt="sm">
                  <Button
                    variant="subtle"
                    leftSection={<ArrowLeft size={16} />}
                    onClick={() => setStep(2)}
                    disabled={processing}
                    type="button"
                  >
                    Back
                  </Button>

                  <Button
                    type="submit"
                    color="olive"
                    size="md"
                    loading={processing}
                    leftSection={<Check size={16} />}
                  >
                    Create Account
                  </Button>
                </Group>

                <Text size="xs" c="dimmed" ta="center" mt="xs">
                  By clicking Create Account, you agree to our{' '}
                  <Anchor href="/terms" target="_blank" size="xs">
                    Terms of Service
                  </Anchor>{' '}
                  and{' '}
                  <Anchor href="/privacy" target="_blank" size="xs">
                    Privacy Policy
                  </Anchor>
                  .
                </Text>
              </>
            )}
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
