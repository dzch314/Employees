import { memo, Suspense, useEffect } from 'react';

import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from '@/shared/ui/Loader';

export const App = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
});
