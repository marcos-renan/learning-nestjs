import { UsersService } from './users.service';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService){}

  @Get()
  findAllTasks(){

    return this.usersService
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number){

  }
}
