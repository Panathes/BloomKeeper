import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Users } from '../Entities/Users/user.entity';
import { UsersModule } from '../Modules/Users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'mydb',
      entities: [Users],
    }),
    UsersModule,
  ],
})
export class AppModule {
}
