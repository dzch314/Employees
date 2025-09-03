import { Theme } from '@/shared/lib/context/ThemeContext';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import LightIcon from '@/shared/assets/icons/light.svg';
import DarkIcon from '@/shared/assets/icons/dark.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.SECONDARY}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
