import { ThemeProvider } from 'styled-components'
import CtxProvider from '../components/contexts/ctxGlobal'
import { GlobalStyle } from '../config/globalStyles'
import { theme } from '../config/theme'



export default function App({ Component, pageProps }) {


  return (
    <>
      <GlobalStyle />
      <CtxProvider>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
      </CtxProvider>
    </>
  )
}