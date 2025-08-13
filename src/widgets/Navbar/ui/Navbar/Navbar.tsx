import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getUserTokenSelector, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserTokenSelector);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Text title="Employees" />
      {authData && (
      <Button
        theme={ButtonTheme.SECONDARY}
        className={cls.links}
        onClick={onLogout}
      >
        Log Out
      </Button>
      )}
    </header>
  );
});
