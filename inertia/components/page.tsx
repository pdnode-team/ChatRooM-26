import { type ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'

export default function Page({
  title,
  hideTitle = false,
  description,
  actions,
  children,
}: {
  title: string
  hideTitle?: boolean
  description?: ReactNode
  actions?: ReactNode
  children?: ReactNode
}) {
  const hasHeader = !hideTitle || description || actions

  return (
    <Container
      maxWidth="lg"
      sx={{ py: { xs: 3, md: 4 }, flex: 1, display: 'flex', flexDirection: 'column' }}
    >
      <Head title={title} />
      {hasHeader && (
        <Box component="header" sx={{ mb: 3 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            spacing={2}
          >
            <Box>
              {!hideTitle && (
                <Typography variant="h4" component="h1" fontWeight={700}>
                  {title}
                </Typography>
              )}
              {description && (
                <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                  {description}
                </Typography>
              )}
            </Box>
            {actions && (
              <Stack direction="row" spacing={1.5} alignItems="center">
                {actions}
              </Stack>
            )}
          </Stack>
          <Divider sx={{ mt: 2.5 }} />
        </Box>
      )}
      {children}
    </Container>
  )
}
