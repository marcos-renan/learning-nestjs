import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

  private tasks:Task[] = [
    {
      id:1,
      name: "Comprar pão.",
      description: "Ir na padaria comprar pães.",
      completed:false
    },
    {
      id:2,
      name: "Ir na academia.",
      description: "Treinar e perder kilos.",
      completed:false
    },
    {
      id:3,
      name: "Zerar Quake.",
      description: "Zerar Quake e suas DLC's.",
      completed:false
    },
    {
      id:4,
      name: "Dormir cedo.",
      description: "Dormir antes das 11hrs da noite.",
      completed:false
    }
  ];

  listAllTasks(){
    return this.tasks;
  }

  findOneTask(id:number){
    const task = this.tasks.find(task => task.id === id);

    if(!task){
      throw new NotFoundException("A tarefa não existe.");
    }

    return task;
  }

  createTask(createTaskDto: CreateTaskDto){
    const newId = this.tasks.length + 1;

    const newTask = {
      id: newId,
      ...createTaskDto,
      completed: false
    }

    this.tasks.push(newTask);

    return newTask;
  }

  updateTask(id: number, updateTaskDto:UpdateTaskDto){

    const taskIndex = this.tasks.findIndex(task => task.id === id);

    if(taskIndex < 0){
      throw new NotFoundException("A tarefa não existe.");
    }


    const taskItem = this.tasks[taskIndex];

    this.tasks[taskIndex] ={
      ... taskItem,
      ... updateTaskDto,
    }

    return this.tasks[taskIndex];
  }

  deleteTask(id:number){

    const taskIndex = this.tasks.findIndex(task => task.id === id);

    if(taskIndex < 0){
      throw new NotFoundException("A tarefa não existe.");
    }

    this.tasks.splice(taskIndex, 1);

    return `Tarefa com id:${id} deletada`;
  }
}
