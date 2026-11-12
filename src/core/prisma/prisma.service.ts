import {
  Inject,
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { type ConfigType } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/generated/client.js';
import dbConfig from '../config/db.config.js';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(
    @Inject(dbConfig.KEY)
    private readonly config: ConfigType<typeof dbConfig>,
  ) {
    const adapter = new PrismaPg({
      connectionString: config.url,
    });
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();

    Logger.log(this.config.url);
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
