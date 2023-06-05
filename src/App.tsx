import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { HOME_LOCATION } from './constants/HOME_LOCATION';

import './scss/app.scss';
import { MainLayouts, MarketLayouts } from './layouts';
import { store } from './redux/store';

const CartItemsPage = React.lazy(
  () => import('./pages/CartItemsPage/CartItemsPage')
);
const ChooseItemPage = React.lazy(
  () => import('./pages/ChooseItemPage/ChooseItemPage')
);
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const MarketPage = React.lazy(() => import('./pages/MarketPage/MarketPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'));
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={HOME_LOCATION} element={<MainLayouts />}>
            <Route
              index
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <HomePage />
                </React.Suspense>
              }
            />
            <Route
              path="market"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <MarketLayouts />
                </React.Suspense>
              }
            >
              <Route
                index
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <MarketPage />
                  </React.Suspense>
                }
              />
              <Route
                path="chooseItem/:id"
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <ChooseItemPage />
                  </React.Suspense>
                }
              />
            </Route>
            <Route
              path="about"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <AboutPage />
                </React.Suspense>
              }
            />
            <Route
              path="cart"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <CartItemsPage />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
