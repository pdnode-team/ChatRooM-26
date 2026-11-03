import { useEffect, useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import { Alert, Snackbar } from '@mui/material'

export default function FlashToasts() {
  const { flash } = usePage()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState<string>('')
  const [severity, setSeverity] = useState<'success' | 'error'>('success')

  useEffect(() => {
    return router.on('start', () => setOpen(false))
  }, [])

  useEffect(() => {
    if (flash.error) {
      setMessage(flash.error)
      setSeverity('error')
      setOpen(true)
    } else if (flash.success) {
      setMessage(flash.success)
      setSeverity('success')
      setOpen(true)
    }
  }, [flash])

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity={severity}
        variant="filled"
        elevation={6}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
