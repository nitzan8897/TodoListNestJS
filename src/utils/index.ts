import { HttpException, HttpStatus } from '@nestjs/common';
import TodoList from 'src/modules/todolist/todolist';
import { ListNotFound } from './messages';

export const listIdValidation = (
  RAMMemory: Record<string, TodoList>,
  listId: string,
) => {
  if (!RAMMemory[listId]) {
    throw new HttpException(ListNotFound(listId), HttpStatus.NOT_FOUND);
  }
};
