import ITask from "../task/task.module";

export default interface ITodoList {
  Id: string;
  Name: string;
  Tasks?: ITask[];
}
