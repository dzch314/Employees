import { lazy, type FC } from 'react';

import type { MainPageProps } from './MainPage';

export const MainPageAsync = lazy<FC<MainPageProps>>(() => import('./MainPage'));
