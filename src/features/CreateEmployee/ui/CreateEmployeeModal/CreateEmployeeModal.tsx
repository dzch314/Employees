import { memo, Suspense, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Modal } from '@/shared/ui/Modal/Modal';

import { CreateEmployeeFormAsync } from '../CreateEmployeeForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose(): void;
  onSuccess?(): void;
}

export const CreateEmployeeModal = memo(({
  className, isOpen, onClose, onSuccess,
}: LoginModalProps) => {
  const onCreationSuccess = useCallback(() => {
    onClose();
    if (onSuccess) {
      onSuccess();
    }
  }, [onClose, onSuccess]);

  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <CreateEmployeeFormAsync onSuccess={onCreationSuccess} />
      </Suspense>
    </Modal>
  );
});
