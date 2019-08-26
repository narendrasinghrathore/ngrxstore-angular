export interface ITodoList {
  id: number;
  title: string;
  timestamp: number;
  userId: number;
  [key: string]: any; // help to lookup via index
}
