export interface Task {
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
    modificationDate: string;
    manager: {
      id: number;
      userName: string;
      imagePath: string;
      email: string;
      password: string;
      country: string;
      phoneNumber: string;
      verificationCode: string;
      isVerified: boolean;
      isActivated: boolean;
      creationDate: string;
      modificationDate: string;
    };
  };
  employee: {
    id: number;
    userName: number;
    imagePath: string;
    email: string;
    password: string;
    country: string;
    phoneNumber: string;
    verificationCode: string;
    isVerified: boolean;
    isActivated: boolean;
    creationDate: string;
    modificationDate: string;
  };
}
