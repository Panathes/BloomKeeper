
import { Module } from '@nestjs/common';
import { UsersModule } from '../../Modules/Users/user.module';
import { UsersService } from '../../Providers/Users/user.service';
import { UsersController } from '../../Controllers/Users/user.controller';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UserHttpModule {}
