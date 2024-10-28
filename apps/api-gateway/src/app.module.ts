import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BILLING_QUEUE, SharedModule } from '@app/shared';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [SharedModule, BullModule.registerQueue({
    name: BILLING_QUEUE,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
