import { useEffect } from 'react'
import { router, usePage } from '@inertiajs/react'
import { notifications } from '@mantine/notifications'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

export default function FlashToasts() {
  const { flash } = usePage()

  useEffect(() => {
    return router.on('start', () => {
      notifications.clean()
    })
  }, [])

  useEffect(() => {
    if (flash.error) {
      notifications.show({
        color: 'red',
        title: 'Error',
        message: flash.error,
        icon: <AlertCircle size={18} />,
        autoClose: 4000,
      })
    } else if (flash.success) {
      notifications.show({
        color: 'teal',
        title: 'Success',
        message: flash.success,
        icon: <CheckCircle2 size={18} />,
        autoClose: 4000,
      })
    }
  }, [flash])

  return null
}
