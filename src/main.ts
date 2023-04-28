import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DirectoConfig } from './config/app/configuration';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const configService = app.get<ConfigService<DirectoConfig>>(ConfigService);
  const port = configService.get('port');
  await app.listen(port);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
