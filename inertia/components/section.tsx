import { type ReactNode } from 'react'
import { Card, CardContent, CardHeader, Divider, Stack } from '@mui/material'

export default function Section({
  title,
  description,
  children,
}: {
  title?: string
  description?: ReactNode
  children: ReactNode
}) {
  return (
    <Card
      component="section"
      elevation={1}
      sx={{
        '& + &': {
          mt: 3,
        },
      }}
    >
      {(title || description) && (
        <>
          <CardHeader
            title={title}
            subheader={description}
            slotProps={{
              title: { variant: 'h6', fontWeight: 600 },
              subheader: { variant: 'body2' },
            }}
          />
          <Divider />
        </>
      )}
      <CardContent>
        <Stack spacing={2.5}>{children}</Stack>
      </CardContent>
    </Card>
  )
}
