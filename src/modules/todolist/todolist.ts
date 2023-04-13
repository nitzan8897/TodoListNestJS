import { Entity, OneToMany } from 'typeorm';
import Task from '../task/task';
import ITask from '../task/task.module';
import ITodoList from './todolist.module';
import { IsString, IsNotEmpty } from 'class-validator';

@Entity()
export default class TodoList implements ITodoList {
  @IsString()
  @IsNotEmpty()
  Name: string;
  
  Id: string;

  @OneToMany(() => Task, task => task.todoList)
  Tasks?: Task[];
}
