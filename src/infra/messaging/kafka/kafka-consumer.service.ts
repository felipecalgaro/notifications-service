import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['helped-dingo-10351-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'aGVscGVkLWRpbmdvLTEwMzUxJKhaZmNZQSrlDHjoUtXeVi98m8F6V93PUr2zeCU',
          password: 'beec9f21d4b1426aa0e195cf7c52f89c',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
