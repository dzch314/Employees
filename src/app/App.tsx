import { Suspense, useEffect, useMemo, type FC } from 'react';

import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwither';
import { userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from '@/shared/ui/Loader';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  const actions: FC[] = useMemo(() => [LangSwitcher, ThemeSwitcher], []);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={<Loader />}>
        <Navbar actions={actions} />
        <div className='content-page'>
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
