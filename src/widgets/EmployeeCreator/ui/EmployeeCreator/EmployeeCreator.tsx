import { memo, useState, useCallback } from 'react';

import { CreateEmployeeModal } from '@/features/CreateEmployee';
import AddIcon from '@/shared/assets/icons/add.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize } from '@/shared/ui/Button/Button';

import cls from './EmployeeCreator.module.scss';

interface EmployeeCreatorProps {
  className?: string;
  onSuccess?(): void;
}

export const EmployeeCreator = memo(({ className, onSuccess }: EmployeeCreatorProps) => {
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsCreateUserModalOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsCreateUserModalOpen(true);
  }, []);

  return (
    <>
      <Button onClick={onShowModal} className={classNames(cls.EmployeeCreator, {}, [className])} size={ButtonSize.L}>
        Create
        <AddIcon />
      </Button>
      {isCreateUserModalOpen && (
      <CreateEmployeeModal
        isOpen={isCreateUserModalOpen}
        onClose={onCloseModal}
        onSuccess={onSuccess}
      />
      )}
    </>
  );
});
