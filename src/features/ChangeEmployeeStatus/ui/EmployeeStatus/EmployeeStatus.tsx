import { useCallback, memo, useEffect } from 'react';

import { StatusSelect, type Status } from '@/entities/Status';
import { SelectSize } from '@/shared/ui/Select';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useChangeEmployeeStatus } from '../../api/changeEmployeeStatusApi/changeEmployeeStatusApi';

interface EmployeeStatusProps {
  status: Status;
  employeeId: string;
  className?: string;
  onSuccess?: () => void;
}

export const EmployeeStatus = memo(({
  className, status, employeeId, onSuccess,
}: EmployeeStatusProps) => {
  const [changeEmployeeStatus, { status: requestStatus }] = useChangeEmployeeStatus();

  useEffect(() => {
    if (requestStatus === 'fulfilled' && onSuccess) {
      onSuccess();
    }
  }, [requestStatus, onSuccess]);

  const onChangeStatus = useCallback((newStatus: Status) => {
    if (status !== newStatus) {
      changeEmployeeStatus({ employeeId, status: newStatus });
    }
  }, [changeEmployeeStatus, employeeId, status]);

  return (
    <StatusSelect
      className={classNames('', {}, [className])}
      size={SelectSize.S}
      value={status}
      onChange={onChangeStatus}
      isUnderlined
    />
  );
});
