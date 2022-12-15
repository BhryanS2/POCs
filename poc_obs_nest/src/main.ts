import './tracer';
import { Logger } from './logger';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { PrismaService } from './services/primsa.service';

const logger = new Logger();

async function bootstrap() {
  logger.log('info', 'Starting server');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
