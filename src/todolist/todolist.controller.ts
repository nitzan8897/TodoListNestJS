import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodoListService } from './todolist.service';
import TodoList from '../models/todolist/todolist';
import Task from '../models/task/task';

@Controller('todolist')
export class TodoListController {
  constructor(private readonly appService: TodoListService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createTodoList(@Body() list: TodoList): TodoList {
    try {
      const id = this.appService.AddList(list);
      return this.appService.GetList(id);
    } catch (error) {
      Logger.error(error);
    }
  }

  @Get(':id')
  getTodoList(@Param('id') listId: string): TodoList {
    return this.appService.GetList(listId);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  deleteList(@Param('id') listId: string): string {
    this.appService.RemoveList(listId);
    return 'done';
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateList(
    @Param('id') listId: string,
    @Body('Name') newName: string,
  ): TodoList {
    this.appService.UpdateListName(listId, newName);
    return this.appService.GetList(listId);
  }

  @Post(':id/task')
  @UsePipes(new ValidationPipe())
  createTask(@Body() task: Task, @Param('id') listId: string): string {
    const id = this.appService.AddTask(listId, task);
    return id;
  }
}
