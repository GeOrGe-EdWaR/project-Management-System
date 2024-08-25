import { Task } from './task-model';

export interface GetTasksListResponse {
  pageNumber: number;
  pageSize: number;
  data: Task[];
  totalNumberOfRecords: number;
  totalNumberOfPages: number;
}
