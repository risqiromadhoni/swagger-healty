import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: Add swagger document here
  const options = new DocumentBuilder()
  .setTitle('My Api Doc.')
  .setDescription('Api For Build Animal Hostpital')
  .setVersion('1.0')
  .build();

  // TODO: Include swagger to app module
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
