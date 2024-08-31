export interface User {
    id: number;
    userName: string;
    imagePath: string;
    email: string;
    country: string;
    phoneNumber: number;
    isActivated:boolean
    task: {
        id: number;
        title: string;
        description: string;
        status: string;
        creationDate: string;
        modificationDate: string;
        project: {
          id: number;
          title: string;
          description: string;
          creationDate: string;
          modificationDate: string;}}}
