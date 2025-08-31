import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { FC } from 'react';

import { getUserTokenSelector, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
  mainPageLink?: string;
  actions?: FC[];
}

export const Navbar = ({ className, actions = [], mainPageLink = '/' }: NavbarProps) => {
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserTokenSelector);

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Link to={mainPageLink} className={cls.title}>
        <Text title='Employees' />
      </Link>
      <div className={cls.actionsContainer}>
        <div className={cls.actions}>
          {actions?.map((Action, index) => (
            <Action key={index} />
          ))}
        </div>
        {authData && (
          <Button theme={ButtonTheme.SECONDARY} className={cls.links} onClick={onLogout}>
            Log Out
          </Button>
        )}
      </div>
    </header>
  );
};
