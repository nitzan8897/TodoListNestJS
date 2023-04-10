import { Module } from '@nestjs/common';
import { TodoListController } from './todolist.controller';
import { TodoListService } from './todolist.service';

@Module({
  imports: [],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class AppModule {}
