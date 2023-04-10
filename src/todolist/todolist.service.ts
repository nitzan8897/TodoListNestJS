import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import ITodoListActions from '../modules/todolist/todolist-actions.module';
import IList from '../modules/todolist/todolist.module';
import TodoList from 'src/modules/todolist/todolist';

@Injectable()
export class TodoListService implements ITodoListActions {

  private RAMMemory: Record<string, TodoList> = {};

  AddList(list: IList): string {
    const listId = uuidv4();
    Logger.log(list);
    this.RAMMemory[listId] = { Name: list.Name, Id: listId };
    Logger.log(
      `Added new list, listName: ${this.RAMMemory[listId].Name}, listId: ${listId}`,
    );
    return listId;
  }

  RemoveList(listId: string): void {
    delete this.RAMMemory[listId];
  }

  GetList(listId: string): TodoList | undefined {
    return this.RAMMemory[listId];
  }

  UpdateListName(listId: string, listNewName: string): void {
    if (this.RAMMemory[listId]) {
      this.RAMMemory[listId].Name = listNewName;
    }
  }
}
