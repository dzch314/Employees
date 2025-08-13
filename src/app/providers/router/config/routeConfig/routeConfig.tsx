import type { RouteProps } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';
import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',

  NOT_FOUND = 'not_found',
}

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  authRedirect?: boolean;
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',

  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
    authRedirect: true,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
