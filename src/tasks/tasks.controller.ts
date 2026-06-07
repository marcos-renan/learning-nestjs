import { LoggerInterceptor } from './../commom/interceptors/logger.interceptor';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginationDto } from './dto/pagination.dto';
import { BodyCreateTaskInterceptor } from '@/commom/interceptors/body-create-task.interceptor';
import { AddHeaderInterceptor } from '@/commom/interceptors/add-header.interceptor';

@Controller("/tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService){}

  @Get()
  @UseInterceptors(LoggerInterceptor, AddHeaderInterceptor)
    findAllTasks(@Query() paginationDto: PaginationDto){
    return this.tasksService.listAllTasks(paginationDto);
  }

  @Get(":id")
  findOneTask(@Param('id', ParseIntPipe) id:number){
    return this.tasksService.findOneTask(id);
  }

  @Post()
  @UseInterceptors(BodyCreateTaskInterceptor)
  createTask(@Body() createTaskDto: CreateTaskDto){
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
