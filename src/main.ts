import { NestFactory } from '@nestjs/core';
import { RootModule } from './modules/root.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  const config = new DocumentBuilder()
    .setTitle('User management')
    .setDescription('The User API')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    .addSecurityRequirements('bearer')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch(console.error);
