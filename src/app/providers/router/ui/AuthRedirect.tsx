import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

import { getUserTokenSelector } from '@/entities/User';

const getRouteMain = () => '/';
const getRouteLogin = () => '/login';

export interface AuthRedirectProps {
  children: ReactNode;
  authOnly?: boolean;
  authRedirect?: boolean;
}

export const AuthRedirect = ({ children, authOnly, authRedirect }: AuthRedirectProps) => {
  const token = useSelector(getUserTokenSelector);
  const location = useLocation();

  if (authOnly && !token) {
    return <Navigate to={getRouteLogin()} state={{ from: location }} replace />;
  }

  if (authRedirect && token) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  return children;
};
