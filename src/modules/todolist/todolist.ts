import ITask from '../task/task.module';
import ITodoList from './todolist.module';
import { IsString, IsNotEmpty } from 'class-validator';

export default class TodoList implements ITodoList {
  @IsString()
  @IsNotEmpty()
  Name: string;
  
  Id: string;
  Tasks?: ITask[];
}
