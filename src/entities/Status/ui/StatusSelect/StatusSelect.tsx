import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, type SelectProps } from '@/shared/ui/Select';

import { statusOptions } from '../../model/consts/statusConsts';
import type { Status } from '../../model/types/status';

interface StatusSelectProps extends Omit<SelectProps<Status>, 'options'>{}

export const StatusSelect = memo((props: StatusSelectProps) => (
  <Select
    {...props}
    className={classNames('', {}, [props?.className])}
    options={statusOptions}
  />
));
