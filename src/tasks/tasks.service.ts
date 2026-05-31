import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

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

  findOneTask(id:string){
    const task = this.tasks.find(task => task.id === Number(id));

    if(!task){
      return JSON.stringify("A tarefa não existe.");
    }

    return task;
  }

  createTask(body: any){
    const newId = this.tasks.length + 1;

    const newTask = {
      id: newId,
      ...body
    }

    this.tasks.push(newTask);

    return newTask;
  }

  updateTask(id: string, body:any){
    return `Tarefa com nome ${body.name} e com id:${id} atualizada`;
  }

  deleteTask(id:string){
    return `Tarefa com id:${id} deletada`;
  }
}
