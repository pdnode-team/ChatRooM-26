import { urlFor } from '~/client'
import { usePage } from '@inertiajs/react'
import { Link } from '@adonisjs/inertia/react'
import { MessageSquare, ShieldCheck, Users, Zap } from 'lucide-react'
import MarketingLayout from '~/layouts/marketing'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material'

const features = [
  {
    icon: Zap,
    title: 'Real-Time Messaging',
    description: 'Instant communication with low-latency message delivery and seamless updates.',
  },
  {
    icon: Users,
    title: 'Team Channels',
    description: 'Organize conversations by topic, project, or team in dedicated chat rooms.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Private',
    description: 'Protected sessions and modern authentication keep your conversations safe.',
  },
]

export default function Home() {
  const { props } = usePage()

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack alignItems="center" textAlign="center" spacing={3} sx={{ maxWidth: 680, mx: 'auto', mb: 8 }}>
        <Chip
          icon={<MessageSquare size={15} />}
          label="Material Design UI"
          color="primary"
          variant="outlined"
        />

        <Typography variant="h2" component="h1" fontWeight={800} sx={{ fontSize: { xs: '2.25rem', md: '3.25rem' } }}>
          Connect and chat in real time with ChatRooM
        </Typography>

        <Typography variant="h6" color="text.secondary" fontWeight={400}>
          A clean, fast, and modern full-stack chat platform built with React and Material UI.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
          {props.user ? (
            <Button
              component={Link}
              href={urlFor('dashboard')}
              variant="contained"
              size="large"
              sx={{ px: 4 }}
            >
              Go to Dashboard
            </Button>
          ) : (
            <>
              <Button
                component={Link}
                href={urlFor('new_account.create')}
                variant="contained"
                size="large"
                sx={{ px: 4 }}
              >
                Get Started
              </Button>
              <Button
                component={Link}
                href={urlFor('session.create')}
                variant="outlined"
                size="large"
                sx={{ px: 4 }}
              >
                Sign In
              </Button>
            </>
          )}
        </Stack>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title} elevation={3} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3.5 }}>
              <Avatar
                sx={{
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  width: 48,
                  height: 48,
                  mb: 2.5,
                }}
              >
                <Icon size={24} />
              </Avatar>
              <Typography variant="h6" component="h2" fontWeight={700} gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
                {description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  )
}

Home.layout = [MarketingLayout]
