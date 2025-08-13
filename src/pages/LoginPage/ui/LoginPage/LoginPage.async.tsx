import { lazy, type FC } from 'react';

import type { LoginPageProps } from './LoginPage';

export const LoginPageAsync = lazy<FC<LoginPageProps>>(() => import('./LoginPage'));
