import type { Status } from '@/entities/Status';

export interface FilterEmployeesSchema {
  filter?: Status;
  searchText?: string;
}
