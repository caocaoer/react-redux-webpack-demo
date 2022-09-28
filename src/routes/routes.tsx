import React, { lazy, Suspense } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { RouteProps } from '@/models/routes';
import { USER_ROLE_ENUM } from '@/constants/user';

import Login from '@/pages/login/login';

const Layout = lazy(() => import('@/layout/layout'));
const EditPatient = lazy(() => import('@/pages/edit-patient/edit-patient'));
const Home = lazy(() => import('@/pages/home/home'));

const routes: RouteProps[] = [
  {
    path: '/',
    element: lazyLoad(Layout),
    children: [
      {
        index: true,
        path: '/',
        element: lazyLoad(Home),
      },
      {
        path: 'edit-patient/:id',
        element: lazyLoad(EditPatient),
        meta: {
          auth: true,
          roles: [USER_ROLE_ENUM.ADMIN, USER_ROLE_ENUM.CLINICIAN],
        },
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
];

function lazyLoad(Comp: React.LazyExoticComponent<any>): React.ReactNode {
  return (
    <Suspense
      fallback={
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }>
      <Comp />
    </Suspense>
  );
}

export default routes;
