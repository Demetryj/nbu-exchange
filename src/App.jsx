import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout';

const HomePage = lazy(() => import('./pages/Home'));
const ModifiedRatesPage = lazy(() => import('./pages/ModifiedRates'));
const SearchRatesPage = lazy(() => import('./pages/SearchRates/SearchRates'));
const EditRatePage = lazy(() => import('./pages/EditRate/EditRate'));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modified" element={<ModifiedRatesPage />} />
        <Route path="/search" element={<SearchRatesPage />} />
        <Route path="/edit/:currencyCode" element={<EditRatePage />} />
      </Routes>
    </Layout>
  );
};

export default App;
