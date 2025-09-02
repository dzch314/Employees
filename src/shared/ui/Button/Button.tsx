import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  COMMON = 'common',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  isDisabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    isDisabled = false,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.disabled]: isDisabled,
  };

  const additional = [className, cls[theme], cls[size]];

  return (
    <button type='button' className={classNames(cls.Button, mods, additional)} disabled={isDisabled} {...otherProps}>
      {children}
    </button>
  );
});
