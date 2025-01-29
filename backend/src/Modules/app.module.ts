import { Module } from '@nestjs/common';
import { AppController } from '../Controllers/app.controller';
import { AppService } from '../Providers/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
