import Page from '~/components/page'
import { LayoutGrid } from 'lucide-react'
import AppLayout from '~/layouts/app'
import { Avatar, Card, CardContent, Chip, Stack, Typography } from '@mui/material'

export default function Dashboard() {
  return (
    <Page title="Dashboard" description="Overview of your workspace and chat rooms.">
      <Card elevation={2} sx={{ my: 'auto' }}>
        <CardContent sx={{ py: 8, px: 3 }}>
          <Stack
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ textAlign: 'center', maxWidth: 460, mx: 'auto' }}
          >
            <Avatar
              sx={{
                width: 64,
                height: 64,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
              }}
            >
              <LayoutGrid size={30} />
            </Avatar>

            <Typography variant="h5" component="h2" fontWeight={700}>
              Your dashboard is ready
            </Typography>

            <Typography variant="body1" color="text.secondary">
              It&apos;s empty on purpose. A clean starting point with nothing to undo. Add your
              first route and component to begin.
            </Typography>

            <Chip
              label="inertia/pages/dashboard.tsx"
              variant="outlined"
              color="primary"
              size="small"
              sx={{ fontFamily: 'monospace' }}
            />
          </Stack>
        </CardContent>
      </Card>
    </Page>
  )
}

Dashboard.layout = [AppLayout]
