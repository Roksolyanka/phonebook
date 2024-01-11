import { Suspense } from 'react';

import { Loader } from 'components/Loader/Loader';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { RoutesList } from 'components/Routes/Routes';


export const App = () => {
  return (
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
};
