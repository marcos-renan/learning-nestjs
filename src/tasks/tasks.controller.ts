import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Patch(":id")
  updateTask(@Param("id") id:string, @Body() body:any){
    return this.tasksService.updateTask(id, body);
  }

  @Delete(":id")
  deleteTask(@Param("id") id:string){
    return this.tasksService.deleteTask(id);
  }
}
