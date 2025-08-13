import {
  memo, useEffect, useState, useCallback,
  type MouseEvent,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import DownIcon from '@/shared/assets/icons/down.svg';
import CrossIcon from '@/shared/assets/icons/cross.svg';

import { OptionsList } from './OptionsList';
import type { SelectOption } from './Option';
import cls from './Select.module.scss';

export enum SelectSize {
  S = 'size_s',
  M = 'size_m',
}

export interface SelectProps<T extends string> {
  className?: string;
  value?: T;
  onChange?(value?: T): void;
  size?: SelectSize;
  label?: string;
  isUnderlined?: boolean;
  placeholder?: string;
  options?: SelectOption<T>[];
  isClearable?: boolean;
}

export const Select = memo(<T extends string>(props: SelectProps<T>) => {
  const {
    options,
    value,
    onChange,
    className,
    size = SelectSize.M,
    label = '',
    isUnderlined = false,
    placeholder = '',
    isClearable = false,
  } = props;

  const [selectedOption, setSelectedOption] = useState<SelectOption<T> | undefined>();

  useEffect(() => {
    setSelectedOption(options?.find((option) => option.value === value));
  }, [options, value]);

  const [isOpen, setIsOpen] = useState(false);
  const onOpen = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  }, []);
  const onClose = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', onClose);
    }
    return () => document.removeEventListener('click', onClose);
  }, [isOpen, onClose]);

  const onOptionClick = useCallback((option: SelectOption<T>) => {
    if (onChange) {
      onChange(option.value);
    }
    setSelectedOption(option);
    onClose();
  }, [onChange, onClose]);

  const onClearClick = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    if (onChange) {
      onChange(undefined);
    }
    setSelectedOption(undefined);
  }, [onChange]);

  return (
    <div className={classNames(cls.SelectWrapper, {}, [className])}>
      {label && <p className={cls.label}>{label}</p>}
      <button
        type="button"
        className={classNames(cls.select, {}, [cls[size]])}
        onClick={onOpen}
      >
        {selectedOption?.content || selectedOption?.value || <p className={cls.placeholder}>{placeholder}</p>}
        <div className={cls.selectActions}>
          <CrossIcon
            className={classNames(cls.clearIcon, { [cls.showClearIcon]: !!selectedOption && isClearable }, [])}
            onClick={onClearClick}
            data-testid="cross-icon"
          />
          <DownIcon className={classNames(cls.closeIcon, { [cls.openIcon]: isOpen }, [])} />
        </div>
      </button>
      <OptionsList
        options={options}
        onChange={onOptionClick}
        className={classNames('', { [cls.isOpen]: isOpen }, [])}
      />
      {isUnderlined && <hr className={cls.divider} />}
    </div>
  );
});
