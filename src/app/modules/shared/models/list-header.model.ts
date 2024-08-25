export interface ListHeader {
  type: string;
  header: string;
  datafield: string;
  objectKey?: string;
  objectValue?: string;
  format?: string;
  defaultImage?: string;
  actions?: {
    isView?: boolean;
    isEdit?: boolean;
    isDelete?: boolean;
    isBlock?: boolean;
  };
}
