

export interface ITodoItem{
  id: string;
  title: string;
  description?: string;
  tags: string[];
  completed: boolean;
  createdDate: Date | string;
  modifiedDate: Date | string;
  createdBy: string;
  modifiedBy: string;
  children?: ITodoItem[];
}
