import {
  memo, useCallback, useEffect, useState,
} from 'react';

import { StatusSelect, type Status } from '@/entities/Status';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { ImageUpload } from '@/shared/ui/ImageUpload';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

import { useCreateEmployee } from '../../api/createEmployeeApi/createEmployeeApi';
import cls from './CreateEmployeeForm.module.scss';

export interface CreateEmployeeProps {
  className?: string;
  onSuccess: () => void;
  onCancel(): void;
}

const CreateEmployeeForm = memo(({ className, onSuccess, onCancel }: CreateEmployeeProps) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<Status>();
  const [img, setImage] = useState('');

  const [createEmployee, { isLoading, error, status: reqStatus }] = useCreateEmployee();

  useEffect(() => {
    if (reqStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, reqStatus]);

  const onCreateClick = useCallback(() => {
    if (name && status) {
      createEmployee({ name, status, img });
    }
  }, [createEmployee, name, status, img]);

  const onCancelClick = useCallback(() => {
    onCancel();
  }, [onCancel]);

  const onChangeName = useCallback((value?: string) => setName(value || ''), [setName]);
  const onChangeStatus = useCallback(setStatus, [setStatus]);
  const onChangeImg = useCallback((value?: string) => setImage(value || ''), [setImage]);

  return (
    <div className={classNames(cls.CreateUserForm, {}, [className])}>
      <Text className={cls.formHeader} text="Create new user" />
      {error && <Text theme={TextTheme.ERROR} text="Something went wrong" />}
      <hr className={cls.divider} />
      <Input
        className={cls.input}
        placeholder="Type user name"
        label="User name*:"
        isUnderlined
        onChange={onChangeName}
        value={name}
        regex={/^[a-zA-Z\s]*$/}
      />
      <StatusSelect
        className={cls.input}
        placeholder="Select user status"
        label="Status*:"
        isUnderlined
        onChange={onChangeStatus}
        value={status}
      />
      <ImageUpload
        className={cls.input}
        label="Photo:"
        isUnderlined
        isClearable
        onChange={onChangeImg}
      />
      <div className={cls.btnContainer}>
        <Button
          theme={ButtonTheme.PRIMARY}
          onClick={onCreateClick}
          isDisabled={isLoading || !name || !status}
        >
          Create
        </Button>
        <Button
          theme={ButtonTheme.COMMON}
          onClick={onCancelClick}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
});

export default CreateEmployeeForm;
