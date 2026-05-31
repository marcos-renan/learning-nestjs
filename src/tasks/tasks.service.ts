import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

  listAllTasks(){
    return [{
      id:1, task: "Comprar pão"
    }]
  }

  findOneTask(id:string){
    return [{
      id:1, task: `Tarefa com id:${id}`
    }]
  }

  createTask(body: any){
    return body;
  }

  updateTask(id: string, body:any){
    return `Tarefa com nome ${body.name} e com id:${id} atualizada`;
  }
}
