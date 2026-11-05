import {
  Modal,
  Button,
  TextInput,
  Group,
  Stack,
  Text,
  SegmentedControl,
  Input,
} from '@mantine/core'
import { useForm } from '@inertiajs/react'
import { SyntheticEvent } from 'react'

interface CreateSpaceModalProps {
  opened: boolean
  onClose: () => void
}

export function CreateSpaceDialog({ opened, onClose }: CreateSpaceModalProps) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    type: 'ROOM',
    avatar: '',
  })

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    post('/spaces', {
      onSuccess: () => {
        reset()
        onClose()
      },
      onError: (formErrors) => {
        console.log('Validation failed:', formErrors)
      },
    })
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Create a new Space"
      centered
      radius="md"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
          <TextInput
            label="Name"
            placeholder="A Cool Space"
            required
            data-autofocus
            value={data.name}
            error={errors.name}
            onChange={(e) => setData('name', e.currentTarget.value)}
          />
          <Stack gap="xs">
            <Input.Wrapper label="Type" error={errors.type}>
              <SegmentedControl
                value={data.type}
                onChange={(value) => setData('type', value)}
                color="olive"
                fullWidth
                data={[
                  { label: 'Public Room', value: 'ROOM' },
                  { label: 'Direct Message', value: 'DM', disabled: true },
                  { label: 'Group Chat', value: 'GROUP_DM', disabled: true },
                ]}
              />
            </Input.Wrapper>
          </Stack>
          <TextInput
            label="Avatar URL"
            placeholder="https://..."
            value={data.avatar}
            error={errors.avatar}
            onChange={(e) => setData('avatar', e.currentTarget.value)}
          />

          <Group justify="flex-end" mt="md">
            <Button variant="default" onClick={onClose} loading={processing}>
              Cancel
            </Button>
            <Button type="submit" color="olive" loading={processing}>
              Create
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  )
}
