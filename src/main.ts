import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // DTO'ni avtomatik tarzda ko‘rsatish
      whitelist: true, // Noto‘g‘ri xususiyatlar bilan yuborilgan maydonlarni olib tashlash
      forbidNonWhitelisted: true, // Yuborilgan noto‘g‘ri xususiyatlar bo‘lsa xato qaytarish
      disableErrorMessages: false, // Xatolarni ko‘rsatish
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('CV MAKER')
    .setDescription('THIS PROJECT CREATE MAKER')
    .setVersion('1.0')
    .addTag('')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
