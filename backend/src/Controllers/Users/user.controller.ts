import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';

import { UsersService } from '../../Providers/Users/user.service';
import { Users } from '../../Entities/Users/user.entity';

@Controller('users')
export class UsersController { 
    constructor(private readonly usersService : UsersService) {}

    @Post()
    async create(@Body() body: { name: string; email: string }): Promise<Users> {
        return await this.usersService.create(body.name, body.email);
      }

    @Get()
    async findAll(): Promise<Users[]> {
        const users = await this.usersService.findAll();
        return users;
        }  

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
      await this.usersService.remove(id);
    }
}