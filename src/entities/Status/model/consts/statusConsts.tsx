import { StatusOption } from '../../ui/StatusOption';
import type { Status } from '../types/status';

export const statusVocabulary: Record<Status, string> = {
  Working: 'Working',
  OnVacation: 'On Vacation',
  LunchTime: 'Lunch Time',
  BusinessTrip: 'Business Trip',
};

export const statusOptions = Object.entries(statusVocabulary).map(([value, text]) => ({
  value,
  content: <StatusOption text={text} value={value as Status} />,
}));
