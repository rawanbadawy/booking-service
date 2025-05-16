import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CqrsModule } from '@nestjs/cqrs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  await app.listen(3005);
  console.log('Application is running on: http://localhost:3005');
}
bootstrap();
