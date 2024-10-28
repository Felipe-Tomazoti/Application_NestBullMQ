import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi'


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        REDIS_HOST: Joi.string().required(),
        REDIS_PASSWORD: Joi.string().required(),
        REDIS_PORT: Joi.number().required(),
      })
    }),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const host = configService.getOrThrow('REDIS_HOST');
        const port = configService.getOrThrow('REDIS_PORT');
        const password = configService.getOrThrow('REDIS_PASSWORD');
        return {
          redis: {
            host,
            port: parseInt(port, 10),
            password,
          },
        };
      },
    })
  ],
  exports: [
    BullModule
  ]
})
export class SharedModule { }
