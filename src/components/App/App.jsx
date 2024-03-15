import { Suspense } from 'react';

import { Loader } from 'components/Loader';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { RoutesList } from 'components/Routes';

export const App = () => (
  <div id="app-container">
    <Header />
    <main>
      <Suspense fallback={<Loader />}>
        <RoutesList />
      </Suspense>
    </main>
    <Footer />
  </div>
);
