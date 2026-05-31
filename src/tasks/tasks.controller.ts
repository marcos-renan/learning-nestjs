import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller("/tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService){}

  @Get()
  getTasks(){
    return this.tasksService.listAllTasks();
  }

  @Get(":id")
  getOneTask(@Param('id') id:string){
    return this.tasksService.findOneTask(id);
  }

  @Post()
  postTask(@Body() body: any){
    return this.tasksService.createTask(body);
  }
}
