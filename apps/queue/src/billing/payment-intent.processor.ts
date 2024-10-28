import { BILLING_QUEUE, CreatePaymentIntent } from "@app/shared";
import { Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { Job } from "bull";

@Processor(BILLING_QUEUE)
export class PaymentIntentProcessor{

    private logger = new Logger(PaymentIntentProcessor.name)

    @Process()
    async handleProcess(job: Job<CreatePaymentIntent>){
        this.logger.debug(job.data);
    }
}