import { Suspense } from 'react';

import { AppBar } from './components/AppBar/AppBar';

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />

      <main>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </>
  );
};
