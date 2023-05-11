import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import GlobalStyles from '../assets/styles/global';
import theme from '../assets/styles/themes/default';
import { router } from '../routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
