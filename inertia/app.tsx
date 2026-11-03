import './css/app.css'
import { client } from './client'
import { createRoot } from 'react-dom/client'
import { TuyauProvider } from '@adonisjs/inertia/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp, type ResolvedComponent } from '@inertiajs/react'
import { AppThemeProvider } from './components/theme_toggle'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: async (name) => {
    const page = await resolvePageComponent(
      `./pages/${name}.tsx`,
      import.meta.glob<{ default: ResolvedComponent }>('./pages/**/*.tsx')
    )
    return page.default
  },
  setup({ el, App, props }) {
    const initialTheme = (props.initialPage.props as any)?.preferences?.theme ?? 'light'
    createRoot(el).render(
      <TuyauProvider client={client}>
        <AppThemeProvider initialTheme={initialTheme}>
          <App {...props} />
        </AppThemeProvider>
      </TuyauProvider>
    )
  },
  progress: {
    color: '#4B5563',
  },
})
