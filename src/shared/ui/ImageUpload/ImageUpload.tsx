import { memo, useState, useCallback, useRef, type InputHTMLAttributes, type ChangeEvent } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { convertImageToWebPBase64 } from '@/shared/lib/convertImageToWebPBase64/convertImageToWebPBase64';
import CrossIcon from '@/shared/assets/icons/cross.svg';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

import cls from './ImageUpload.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface ImageUploadProps extends HTMLInputProps {
  className?: string;
  onChange?: (value?: string) => void;
  label?: string;
  isUnderlined?: boolean;
  isClearable?: boolean;
}

export const ImageUpload = memo(
  ({
    className,
    onChange,
    placeholder = 'Choose image',
    label = '',
    isUnderlined = false,
    isClearable = false,
    ...otherProps
  }: ImageUploadProps) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = useCallback(
      async (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (onChange) {
          onChange(await convertImageToWebPBase64(e?.target?.files?.[0]));
        }
      },
      [onChange],
    );

    const onClear = useCallback(() => {
      setValue('');
      if (onChange) {
        onChange(undefined);
      }
    }, [onChange]);

    return (
      <div className={classNames(cls.ImageUploadWrapper, {}, [className])}>
        {label && <p className={cls.label}>{label}</p>}
        <div className={cls.container}>
          <input
            data-testid='fileInput'
            ref={inputRef}
            type='file'
            accept='image/png,image/jpeg'
            multiple={false}
            placeholder={placeholder}
            className={cls.input}
            onChange={onChangeHandler}
            value={value}
            {...otherProps}
          />
          <Button
            onClick={() => {
              inputRef?.current?.click();
            }}
            className={classNames(cls.inputButton, { [cls.showElement]: !value }, [cls.hideElement])}
          >
            {placeholder}
          </Button>
          <Text text={value} className={classNames(cls.hideElement, { [cls.showElement]: value }, [])} />
          <CrossIcon
            className={classNames(cls.clearIcon, { [cls.showElement]: value && isClearable }, [])}
            onClick={onClear}
          />
        </div>
        {isUnderlined && value && <hr className={cls.divider} />}
      </div>
    );
  },
);
