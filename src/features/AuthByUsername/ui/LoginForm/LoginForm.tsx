import {
  useCallback, useEffect, useState,
} from 'react';

import { useAuthByUsername } from '@/features/AuthByUsername/api/authByUsernameApi';
import { userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_TOKEN } from '@/shared/const/localstorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onChangeUsername = (value?: string) => setUsername(value || '');
  const onChangePassword = (value?: string) => setPassword(value || '');

  const [authByUsername, { isLoading, error, data: token }] = useAuthByUsername();

  useEffect(() => {
    if (token && !error) {
      localStorage.setItem(USER_LOCALSTORAGE_TOKEN, token);
      dispatch(userActions.setAuthData(token));
    }
  }, [dispatch, error, token]);

  const onLoginClick = useCallback(() => {
    if (username && password) {
      authByUsername({ username, password });
    }
  }, [authByUsername, password, username]);

  useEffect(() => {
    const onEnterClick = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onLoginClick();
      }
    };
    window.addEventListener('keydown', onEnterClick);
    return () => {
      window.removeEventListener('keydown', onEnterClick);
    };
  }, [onLoginClick]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title="Login" />
      {error && <Text theme={TextTheme.ERROR} text="Incorrect login or password" />}
      <Input
        label="Username"
        className={cls.input}
        placeholder="Type your username"
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        label="Password"
        className={cls.input}
        placeholder="Type your password"
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.PRIMARY}
        className={cls.loginBtn}
        onClick={onLoginClick}
        isDisabled={isLoading || !username || !password}
      >
        Log In
      </Button>
    </div>
  );
};
