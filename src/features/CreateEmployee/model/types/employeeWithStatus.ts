import { Employee } from '@/entities/Employee';
import { Status } from '@/entities/Status';

export interface EmployeeWithStatus extends Employee {
  status: Status;
}
