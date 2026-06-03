import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller("/tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService){}

  @Get()
  findAllTasks(@Query() paginationDto: PaginationDto){
    return this.tasksService.listAllTasks(paginationDto);
  }

  @Get(":id")
  findOneTask(@Param('id', ParseIntPipe) id:number){
    return this.tasksService.findOneTask(id);
  }

  @Post()
  postTask(@Body() createTaskDto: CreateTaskDto){
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch(":id")
  updateTask(@Param("id", ParseIntPipe) id:number, @Body() updateTaskDto:UpdateTaskDto){
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(":id")
  deleteTask(@Param("id", ParseIntPipe) id:number){
    return this.tasksService.deleteTask(id);
  }
}
