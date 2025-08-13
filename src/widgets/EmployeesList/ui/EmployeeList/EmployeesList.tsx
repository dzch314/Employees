import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { EmployeeStatus } from '@/features/ChangeEmployeeStatus';
import { getFilterEmployeesSearchText, getFilterEmployeesStatus } from '@/features/FilterEmployees';
import { EmployeeItem, EmployeeItemSkeleton } from '@/entities/Employee';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from '@/shared/ui/Text';

import { useLazyGetEmployees } from '../../api/employeeListApi/employeesListApi';
import { getEmployeesList } from '../../model/selectors/getEmployeeList/getEmployeesList';
import { employeesListActions, employeesListReducer } from '../../model/slice/employeeListSclice/employeesListSlice';
import cls from './EmployeeList.module.scss';

interface EmployeeListProps {
  className?: string;
  trigger?: number;
}

const reducers: ReducersList = {
  employeesList: employeesListReducer,
};

const getSkeleton = () => new Array(6)
  .fill(0)
  .map((_item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <EmployeeItemSkeleton key={index} />
  ));

export const EmployeesList = memo(({ className, trigger }: EmployeeListProps) => {
  const dispatch = useAppDispatch();
  const [getEmployees, { data: employees, isLoading, error }] = useLazyGetEmployees();
  const status = useSelector(getFilterEmployeesStatus);
  const searchText = useSelector(getFilterEmployeesSearchText);

  const refreshEmployees = useCallback(() => {
    getEmployees(null);
  }, [getEmployees]);

  useEffect(() => {
    refreshEmployees();
  }, [refreshEmployees, trigger]);

  useEffect(() => {
    if (employees) {
      dispatch(
        employeesListActions
          .setEmployees(employees
            .filter((employee) => employee.name?.toLowerCase().includes(searchText?.toLowerCase() ?? '')
                      && (!status || employee.status === status))),
      );
    }
  }, [employees, searchText, status, dispatch]);

  const employeesList = useSelector(getEmployeesList);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.EmployeeList, {}, [className])}>
        {employeesList
          .map((employee) => (
            <EmployeeItem
              key={employee.id}
              employee={employee}
              actionsSlot={(
                <EmployeeStatus
                  status={employee.status}
                  employeeId={employee.id || ''}
                  onSuccess={refreshEmployees}
                />
                    )}
            />
          ))}
        {isLoading && getSkeleton()}
        {error && <Text text="Something went wrong" theme={TextTheme.ERROR} />}
      </div>
    </DynamicModuleLoader>
  );
});
