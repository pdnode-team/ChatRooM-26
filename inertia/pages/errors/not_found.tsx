import { urlFor } from '~/client'
import { Link } from '@adonisjs/inertia/react'
import { FileQuestion } from 'lucide-react'
import MarketingLayout from '~/layouts/marketing'
import { Avatar, Button, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material'

export default function NotFound() {
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
      <Card elevation={3} sx={{ width: '100%', textAlign: 'center' }}>
        <CardContent sx={{ p: { xs: 4, sm: 5 } }}>
          <Stack alignItems="center" spacing={2}>
            <Avatar sx={{ width: 64, height: 64, bgcolor: 'warning.main', color: 'warning.contrastText' }}>
              <FileQuestion size={32} />
            </Avatar>
            <Chip label="Error 404" color="warning" size="small" />
            <Typography variant="h4" component="h1" fontWeight={700}>
              Page Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary">
              The page you tried to reach doesn&apos;t exist. Check the URL or head back home.
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

NotFound.layout = [MarketingLayout]
