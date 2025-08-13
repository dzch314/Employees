import { memo, useCallback, type ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content?: ReactNode | string;
}

interface OptionProps<T extends string>{
  option?: SelectOption<T>;
  className?: string;
  onChange?(option?: SelectOption<T>): void
}

export const Option = memo(<T extends string>({
  option,
  onChange,
  className,
}: OptionProps<T>) => {
  const onClick = useCallback(() => {
    if (onChange) {
      onChange(option);
    }
  }, [onChange, option]);
  return (
    <li className={classNames(cls.option, {}, [className])}>
      <div className={cls.optionItem} onClick={onClick}>
        {option?.content || option?.value}
      </div>
    </li>
  );
});
