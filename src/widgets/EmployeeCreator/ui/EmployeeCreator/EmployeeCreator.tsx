import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CreateEmployeeModal } from '@/features/CreateEmployee';
import AddIcon from '@/shared/assets/icons/add.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize } from '@/shared/ui/Button/Button';

import cls from './EmployeeCreator.module.scss';

interface EmployeeCreatorProps {
  className?: string;
  onSuccess?(): void;
}

export const EmployeeCreator = ({ className, onSuccess }: EmployeeCreatorProps) => {
  const { t } = useTranslation('main');

  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);

  const onCloseModal = () => {
    setIsCreateUserModalOpen(false);
  };

  const onShowModal = () => {
    setIsCreateUserModalOpen(true);
  };

  return (
    <>
      <Button onClick={onShowModal} className={classNames(cls.EmployeeCreator, {}, [className])} size={ButtonSize.L}>
        {t('Create')}
        <AddIcon />
      </Button>
      {isCreateUserModalOpen && (
        <CreateEmployeeModal isOpen={isCreateUserModalOpen} onClose={onCloseModal} onSuccess={onSuccess} />
      )}
    </>
  );
};
