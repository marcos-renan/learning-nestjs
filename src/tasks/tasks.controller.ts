import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

  @Get()
  getTasks() {
    return "Hello tasks"
  }
}
