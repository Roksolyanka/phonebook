import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

import { Loader } from 'components/Loader';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { RoutesList } from 'components/Routes';

export const App = () => (
  <div id="app-container">
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <RoutesList />
        </Suspense>
      </main>
      <Footer />
    </ThemeProvider>
  </div>
);
