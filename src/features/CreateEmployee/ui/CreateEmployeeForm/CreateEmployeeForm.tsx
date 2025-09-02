import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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

const CreateEmployeeForm = ({ className, onSuccess, onCancel }: CreateEmployeeProps) => {
  const { t } = useTranslation('newUser');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<Status>();
  const [img, setImage] = useState('');

  const [createEmployee, { isLoading, error, status: reqStatus }] = useCreateEmployee();

  useEffect(() => {
    if (reqStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, reqStatus]);

  const onCreateClick = () => {
    if (name && status) {
      createEmployee({ name, status, img });
    }
  };

  const onChangeName = (value?: string) => setName(value || '');
  const onChangeImg = (value?: string) => setImage(value || '');

  return (
    <div className={classNames(cls.CreateUserForm, {}, [className])}>
      <Text className={cls.formHeader} text={t('Create new user')} />
      {error && <Text theme={TextTheme.ERROR} text={t('Something went wrong')} />}
      <hr className={cls.divider} />
      <Input
        className={cls.input}
        placeholder={t('Type user name')}
        label={t('User name*')}
        isUnderlined
        onChange={onChangeName}
        value={name}
        regex={/^[a-zA-Z\s]*$/}
      />
      <StatusSelect
        className={cls.input}
        placeholder={t('Select user status')}
        label={t('Status*')}
        isUnderlined
        onChange={setStatus}
        value={status}
      />
      <ImageUpload
        className={cls.input}
        label={t('Photo')}
        placeholder={t('Choose image')}
        isUnderlined
        isClearable
        onChange={onChangeImg}
      />
      <div className={cls.btnContainer}>
        <Button theme={ButtonTheme.PRIMARY} onClick={onCreateClick} isDisabled={isLoading || !name || !status}>
          {t('Create')}
        </Button>
        <Button theme={ButtonTheme.COMMON} onClick={onCancel}>
          {t('Cancel')}
        </Button>
      </div>
    </div>
  );
};

export default CreateEmployeeForm;
