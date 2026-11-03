import { urlFor } from '~/client'
import { Link } from '@adonisjs/inertia/react'
import { ServerCrash } from 'lucide-react'
import MarketingLayout from '~/layouts/marketing'
import { Avatar, Button, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material'

export default function ServerError() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
      }}
    >
      <Card sx={{ width: '100%', textAlign: 'center' }}>
        <CardContent sx={{ p: { xs: 4, sm: 5 } }}>
          <Stack alignItems="center" spacing={2}>
            <Avatar sx={{ width: 64, height: 64, bgcolor: 'error.main', color: 'error.contrastText' }}>
              <ServerCrash size={32} />
            </Avatar>
            <Chip label="Error 500" color="error" size="small" />
            <Typography variant="h4" component="h1" fontWeight={700}>
              Internal Server Error
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Try again in a moment. If the problem persists, check the server logs for the
              underlying exception.
            </Typography>
            <Button component={Link} href={urlFor('home')} variant="contained" sx={{ mt: 1 }}>
              Back to Home
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  )
}

ServerError.layout = [MarketingLayout]
