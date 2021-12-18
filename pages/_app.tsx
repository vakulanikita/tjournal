import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from '../theme';
import { Header } from '../components/Header';

import '../styles/globals.scss';
import 'macro-css';

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;