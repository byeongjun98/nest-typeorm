import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import {Logger} from "nestjs-pino";
import {ValidationPipe} from "@nestjs/common";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useLogger(app.get(Logger))
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted: true,
    transformOptions:{
      enableImplicitConversion: true
    }
  }))
  await app.listen(3000);
}
bootstrap();
