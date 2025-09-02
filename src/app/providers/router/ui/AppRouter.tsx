import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import { AppRouteProps, routeConfig } from '../config/routeConfig/routeConfig';
import { AuthRedirect } from '../ui/AuthRedirect';

export const AppRouter = () => {
  const renderWithWrapper = ({ path, authRedirect = false, authOnly = false, element }: AppRouteProps) => (
    <Route
      key={path}
      path={path}
      element={
        <div className='page-wrapper'>
          <AuthRedirect authRedirect={authRedirect} authOnly={authOnly}>
            {element}
          </AuthRedirect>
        </div>
      }
    />
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};
