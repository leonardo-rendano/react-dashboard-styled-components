import { Layout } from './components/Layout'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import { Dashboard } from './pages/dashboard'
import { List } from './pages/lists'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  )
}