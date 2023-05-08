import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import GlobalStyles from '../assets/styles/global';
import theme from '../assets/styles/themes/default';
import { router } from '../routes';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
