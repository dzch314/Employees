import { LoginForm } from '@/features/AuthByUsername';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './LoginPage.module.scss';

export interface LoginPageProps {
  className?: string;
}

const LoginPage = ({ className }: LoginPageProps) => (
  <div className={classNames(cls.LoginPage, {}, [className])}>
    <LoginForm />
  </div>
);

export default LoginPage;
