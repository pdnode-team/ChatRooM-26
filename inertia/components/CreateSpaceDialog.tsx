import { Modal, Button, TextInput, Group, Stack, SegmentedControl, Input } from '@mantine/core'
import { useForm } from '@inertiajs/react'
import { SyntheticEvent, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface CreateSpaceModalProps {
  opened: boolean
  onClose: () => void
}

export function CreateSpaceDialog({ opened, onClose }: CreateSpaceModalProps) {
  const [step, setStep] = useState<1 | 2>(1)

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    type: 'ROOM',
    avatar: '',
  })

  const handleClose = () => {
    setStep(1)
    reset()
    onClose()
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    post('/spaces', {
      onSuccess: () => {
        handleClose()
      },
      onError: (formErrors) => {
        console.log('Validation failed:', formErrors)
      },
    })
  }

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title={step === 1 ? 'Select Space Type' : 'Create Public Room'}
      centered
      radius="md"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
          {step === 1 ? (
            <>
              <Input.Wrapper
                label="Setup"
                description="Choose what kind of space you want to set up."
                error={errors.type}
              >
                <SegmentedControl
                  value={data.type}
                  onChange={(value) => setData('type', value)}
                  color="olive"
                  fullWidth
                  mt="xs"
                  data={[
                    { label: 'Public Room', value: 'ROOM' },
                    { label: 'Direct Message', value: 'DM', disabled: true },
                    { label: 'Group Chat', value: 'GROUP_DM', disabled: true },
                  ]}
                />
              </Input.Wrapper>

              <Group justify="flex-end" mt="md">
                <Button variant="default" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  color="olive"
                  rightSection={<ArrowRight size={16} />}
                  onClick={() => setStep(2)}
                >
                  Continue
                </Button>
              </Group>
            </>
          ) : (
            // TODO: Do DM and GM support.
            <>
              <TextInput
                label="Room Name"
                placeholder="e.g. General Discussion"
                required
                data-autofocus
                value={data.name}
                error={errors.name}
                onChange={(e) => setData('name', e.currentTarget.value)}
              />

              <TextInput
                label="Avatar URL (Optional)"
                placeholder="https://..."
                value={data.avatar}
                error={errors.avatar}
                onChange={(e) => setData('avatar', e.currentTarget.value)}
              />

              <Group justify="space-between" mt="md">
                <Button
                  variant="subtle"
                  leftSection={<ArrowLeft size={16} />}
                  onClick={() => setStep(1)}
                  disabled={processing}
                >
                  Back
                </Button>

                <Group gap="xs">
                  <Button variant="default" onClick={handleClose} loading={processing}>
                    Cancel
                  </Button>
                  <Button type="submit" color="olive" loading={processing}>
                    Create
                  </Button>
                </Group>
              </Group>
            </>
          )}
        </Stack>
      </form>
    </Modal>
  )
}
