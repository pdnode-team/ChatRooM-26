import { urlFor } from '~/client'
import { usePage } from '@inertiajs/react'
import { Link } from '@adonisjs/inertia/react'
import { Gauge, Layers, Globe } from 'lucide-react'
import MarketingLayout from '~/layouts/marketing'
import { Avatar, Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material'

const features = [
  {
    icon: Globe,
    title: 'Open Source',
    description: 'We love open source! Open source gives people freedom and transparency',
  },
  {
    icon: Layers,
    title: 'Material Design',
    description:
      "Which design is the best? We'll say it's Material Design! Pdnode ChatRoom fully uses Material Design (MUI); if not, please contact us!",
  },
  {
    icon: Gauge,
    title: 'Easy to use',
    description:
      'We will try our best to improve the user experience and make it as easy as it can!',
  },
]
export default function Home() {
  const { props } = usePage()

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack
        spacing={3}
        sx={{
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 680,
          mx: 'auto',
          mb: 8,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2.25rem', md: '3.25rem' },
          }}
        >
          Pdnode ChatRooM
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
          A clean, fast, and modern full-stack chat platform built with React and Material UI.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
          {props.user ? (
            <Link href={urlFor('dashboard')}>
              <Button variant="contained" size="large" sx={{ px: 4 }}>
                Go to Chat
              </Button>
            </Link>
          ) : (
            <>
              <Link href={urlFor('new_account.create')}>
                <Button variant="contained" size="large" sx={{ px: 4 }}>
                  Get Started
                </Button>
              </Link>
              <Link href={urlFor('session.create')}>
                <Button variant="outlined" size="large" sx={{ px: 4 }}>
                  Sign In
                </Button>
              </Link>
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
          <Card key={title} sx={{ height: '100%' }}>
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
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
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
