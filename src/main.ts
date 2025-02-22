import { NestFactory } from '@nestjs/core';
import { RootModule } from './modules/root';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
