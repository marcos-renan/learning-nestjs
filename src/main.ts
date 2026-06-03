import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({

    //PIPES GLOBAIS

    whitelist: true, //remove as chaves que nao estao no dto

    // transform: true, //converte valores de paramentros automaticamente (exemp: string -> number)

  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
