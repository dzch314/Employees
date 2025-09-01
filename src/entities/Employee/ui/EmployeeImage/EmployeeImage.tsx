import { memo, useEffect, useState } from 'react';

import ProfileImage from '@/shared/assets/icons/profile.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import cls from './EmployeeImage.module.scss';

interface EmployeeImageProps {
  img?: string;
  name: string;
  className?: string;
}

export const EmployeeImage = memo(({ className, img, name }: EmployeeImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const image = new Image();
    image.src = img || ProfileImage;
    image.onload = () => {
      if (isMounted) {
        setIsLoading(false);
      }
    };

    return () => {
      isMounted = false;
    };
  }, [img]);

  return (
    <div className={classNames(cls.EmployeeImage, {}, [className])}>
      {isLoading ? (
        <Skeleton width='150px' height='150px' borderRadius='50%' />
      ) : (
        <img className={cls.img} src={img || ProfileImage} alt={name} />
      )}
    </div>
  );
});
