import Task from "../task/task";

export default interface ITodoList {
  Id: string;
  Name: string;
  Tasks?: Task[];
}
