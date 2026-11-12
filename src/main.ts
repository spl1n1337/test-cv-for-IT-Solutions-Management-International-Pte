import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import appConfig from './core/config/app.config.js';
import { CoreModule } from './core/core.module.js';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = app.get<ConfigType<typeof appConfig>>(appConfig.KEY);

  await app.listen(config.http.port, config.http.host);

  Logger.log(`App ${config.name} running on: ${config.urls.public}`);
}
await bootstrap();
