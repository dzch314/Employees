import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'he' : 'en');
  };

  return (
    <Button theme={ButtonTheme.SECONDARY} className={classNames(cls.LangSwitcher, {}, [className])} onClick={toggle}>
      {t('Language code')}
    </Button>
  );
};
