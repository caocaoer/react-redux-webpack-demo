import React, { FC } from 'react';
import { matchRoutes, Navigate, useLocation } from 'react-router-dom';

import { RouteProps } from '@/models/routes';
import store from '@/store';

import routes from './routes';

export function screenRoutesByRole(routes: RouteProps[]) {
  const { role } = store.getState().user;

  return routes
    .map((route: RouteProps) => {
      if (route.meta) {
        const { roles: canIn, unRoles: cantIn } = route.meta;

        if (Array.isArray(cantIn) && cantIn.includes(role)) return null;

        if (Array.isArray(canIn) && !canIn.includes(role)) return null;
      }

      if (!route.children) return route;
      route.children = screenRoutesByRole(route.children);
      return route;
    })
    .filter(i => i !== null) as RouteProps[];
}

export const RouterAuth: FC<{ children: any }> = ({ children }) => {
  const { isLogin } = store.getState().login;
  // console.log(55555, isLogin);
  const location = useLocation();
  const mathchs = matchRoutes(routes, location);
  const isNeedLogin = mathchs?.some(item => {
    const route: RouteProps = item.route;

    if (!route.meta) return false;
    return route.meta.auth;
  });

  if (isNeedLogin && !isLogin) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};
