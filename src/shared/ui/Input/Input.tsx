import { memo, useState, useEffect, type InputHTMLAttributes, type ChangeEvent, type ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value?: string) => void;
  label?: string;
  Icon?: ReactNode;
  isUnderlined?: boolean;
  regex?: RegExp;
}

export const Input = memo(
  ({ className, value, onChange, placeholder, label, Icon, isUnderlined, regex, ...otherProps }: InputProps) => {
    const [inputValue, setInputValue] = useState(value ?? '');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (!regex || regex.test(e.target.value)) {
        setInputValue(e.target.value);
      }
    };

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (onChange && inputValue !== value) {
          onChange(inputValue);
        }
      }, 250);
      return () => clearTimeout(timeoutId);
    }, [inputValue, onChange, value]);

    return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
        {label && <p className={cls.label}>{label}</p>}
        <div className={cls.container}>
          {Icon}
          <input
            type='text'
            placeholder={placeholder}
            className={cls.input}
            value={inputValue}
            onChange={onChangeHandler}
            {...otherProps}
          />
        </div>
        {isUnderlined && <hr className={cls.divider} />}
      </div>
    );
  },
);
