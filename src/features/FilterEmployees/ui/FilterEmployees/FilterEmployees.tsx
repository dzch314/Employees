import { useSelector } from 'react-redux';

import { StatusSelect, type Status } from '@/entities/Status';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from '@/shared/ui/Input';
import { VerticalDivider } from '@/shared/ui/VerticalDivider';

import { getFilterEmployeesStatus } from '../../model/selectors/getFilterEmployeesStatus/getFilterEmployeesStatus';
import { getFilterEmployeesSearchText } from '../../model/selectors/getFilterEmployeesSearchText/getFilterEmployeesSearchText';
import {
  filterEmployeesActions,
  filterEmployeesReducer,
} from '../../model/slice/filterEmployeesSlice/filterEmployeesSlice';
import cls from './FilterEmployees.module.scss';

export interface FilterEmployeesProps {
  className?: string;
}

const reducers: ReducersList = {
  filterEmployees: filterEmployeesReducer,
};

export const FilterEmployees = ({ className }: FilterEmployeesProps) => {
  const dispatch = useAppDispatch();
  const searchText = useSelector(getFilterEmployeesSearchText);
  const filter = useSelector(getFilterEmployeesStatus);

  const onChangeSearchText = (value?: string) =>
    dispatch(filterEmployeesActions.setSearchText(value || ''));

  const onChangeFilter = (value: Status) =>
    dispatch(filterEmployeesActions.setFilter(value));

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.EmployeesFilter, {}, [className])}>
        <Input
          placeholder='Type to search'
          Icon={<SearchIcon />}
          value={searchText}
          onChange={onChangeSearchText}
          className={cls.searchText}
        />
        <VerticalDivider />
        <StatusSelect
          isClearable
          placeholder='Filter by status'
          value={filter}
          onChange={onChangeFilter}
          className={cls.statusFilter}
        />
      </div>
    </DynamicModuleLoader>
  );
};
