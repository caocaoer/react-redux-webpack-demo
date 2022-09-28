import '@/styles/styles.scss';

import React, { FC, useMemo } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from './i18n';

import store from '@/store';
import routes from '@/routes/routes';
import { RouterAuth, screenRoutesByRole } from '@/routes/index';

const App: FC = () => {
  const { role } = store.getState().user;
  const curRoutes = useMemo(() => screenRoutesByRole(routes), [role]);
  const Element = useRoutes(curRoutes);

  return <RouterAuth>{Element}</RouterAuth>;
};

export const root = document.getElementById('app');
createRoot(root!).render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </I18nextProvider>
);
