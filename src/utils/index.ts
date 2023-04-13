import { HttpException, HttpStatus } from "@nestjs/common";
import TodoList from "src/modules/todolist/todolist";

export const listIdValidation = (RAMMemory: Record<string, TodoList>, listId: string) =>{
    if (!RAMMemory[listId]) {
        throw new HttpException(
          'List not found!, make sure this id exists!',
          HttpStatus.NOT_FOUND,
        );
      }
}