import { Body, Controller, Get, Logger, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoListService } from './todolist.service';
import TodoList from 'src/modules/todolist/todolist';

@Controller('todolist')
export class TodoListController {
  constructor(private readonly appService: TodoListService) {}

  @Get(':id')
  getTodoList(@Param('id') listId: string): TodoList {
    return this.appService.GetList(listId);
  }

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
}
