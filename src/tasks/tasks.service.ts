import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { create } from 'domain';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService){}

  async listAllTasks(){
    const allTasks = await this.prisma.task.findMany();
    return allTasks;
  }

  async findOneTask(id:number){
    const task = await this.prisma.task.findFirst({
      where:{
        id:id
      }
    });

    if(!task){
      throw new NotFoundException("A tarefa não foi encontrada.");
    }

    return task;
  }

  async createTask(createTaskDto: CreateTaskDto){

    const newTask = await this.prisma.task.create({
      data:{
        name: createTaskDto.name,
        description: createTaskDto.description,
        completed: false
      }
    });

    return {data:{
        message:"Tarefa criada com sucesso!",
        newTask: newTask
      }
    }
  }

  async updateTask(id: number, updateTaskDto:UpdateTaskDto){

    const findTask = await this.prisma.task.findFirst({
      where:{
        id:id
      }
    });

    if(!findTask){
      throw new NotFoundException("A tarefa não foi encontrada.");
    }

    const updatedTask = await this.prisma.task.update({
      where:{
        id:findTask.id
      },
      data:updateTaskDto
    });

    return {
      data:{
        message:"Tarefa atualizada com sucesso!",
        updatedTask: updatedTask
      }
    };
  }

  async deleteTask(id:number){

    const findTask = await this.prisma.task.findFirst({
      where:{
        id:id
      }
    });

    if(!findTask){
      throw new NotFoundException("A tarefa não foi encontrada.");
    }

    const deletedTask = await this.prisma.task.delete({
      where:{
        id:id
      }
    });

    return {
      data:{
        message:"Tarefa deletada com sucesso!",
        deletedTask: deletedTask
      }
    };
  }
}
