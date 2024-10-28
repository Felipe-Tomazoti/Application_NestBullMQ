import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { CreatePaymentIntent } from '@app/shared';
import { BILLING_QUEUE } from '@app/shared';

@Injectable()
export class AppService {
  private id = 1

  constructor(
    @InjectQueue(BILLING_QUEUE) private readonly billingQueue: Queue
  ) { }

  async handlePaymentIntent(body: CreatePaymentIntent) {
    try {
      await this.billingQueue.add({ ...body, id: this.id });
      this.id++;
    } catch (error) {
      console.log("Error: " + error);
    }
  }
}
