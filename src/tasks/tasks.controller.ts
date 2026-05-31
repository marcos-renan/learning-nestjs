import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

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
  postTask(@Body() createTaskDto: CreateTaskDto){
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch(":id")
  updateTask(@Param("id") id:string, @Body() updateTaskDto:UpdateTaskDto){
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(":id")
  deleteTask(@Param("id") id:string){
    return this.tasksService.deleteTask(id);
  }
}
