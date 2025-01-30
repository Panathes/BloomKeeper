import { Module } from '@nestjs/common';
import { UsersService } from '../../Providers/Users/user.service';
import { UsersController } from '../../Controllers/Users/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../../Entities/Users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}