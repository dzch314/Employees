import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import cls from './EmployeeItem.module.scss';

export const EmployeeItemSkeleton = () => (
  <div className={cls.EmployeeItem}>
    <div>
      <Skeleton width='150px' height='150px' borderRadius='50%' />
    </div>
    <div className={cls.skeletonInfo}>
      <Skeleton width='200px' height='22px' />
      <Skeleton width='200px' height='25px' />
    </div>
  </div>
);
