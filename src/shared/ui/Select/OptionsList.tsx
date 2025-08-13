import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Option, type SelectOption } from './Option';
import cls from './Select.module.scss';

interface OptionsListProps<T extends string>{
  options?: SelectOption<T>[];
  className?: string;
  onChange?(option: SelectOption<T>): void
}

export const OptionsList = memo(<T extends string>({
  options,
  onChange,
  className,
}: OptionsListProps<T>) => (
  <ul className={classNames(cls.optionsList, {}, [className])}>
    {
      options?.map((option) => (<Option key={option.value} option={option} onChange={onChange} />))
    }
  </ul>
  ));
