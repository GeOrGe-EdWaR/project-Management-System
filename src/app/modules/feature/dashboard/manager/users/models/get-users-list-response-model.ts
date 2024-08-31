import { User } from "./User-model";

export interface GetUsersListResponse {

  
    pageNumber: number;
    pageSize: number;
    data: User[];
    totalNumberOfRecords: number;
    totalNumberOfPages: number;
    
      
}
