import { lazy, type FC } from 'react';

import type { CreateEmployeeProps } from './CreateEmployeeForm';

export const CreateEmployeeFormAsync = lazy<FC<CreateEmployeeProps>>(() => import('./CreateEmployeeForm'));
