import { Entity, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import ITask from './task.module';
import TodoList from '../todolist/todolist';

@Entity()
export default class Task implements ITask {
//   @IsString()
  taskId: string;

//   @IsNotEmpty()
  finishDate: Date;

  doneStatus: boolean;

  @IsString()
  @IsNotEmpty()
  description: string;

  @ManyToOne(() => TodoList, (todoList) => todoList.Tasks)
  todoList: TodoList;
}
