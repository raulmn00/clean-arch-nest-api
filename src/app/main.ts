import { NestFactory } from '@nestjs/core';
import { AnimalsModule } from './shared/animals.module';

async function bootstrap() {
  const app = await NestFactory.create(AnimalsModule);
  await app.listen(3000);
}
bootstrap();
