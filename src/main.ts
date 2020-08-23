import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException, Next } from "@nestjs/common";
import { ValidationError } from 'class-validator';
import * as _ from "lodash";

async function bootstrap() {

  global._ = _;

  const app = await NestFactory.create(AppModule, {
    logger: ["error", "warn"]
  });

  app.setGlobalPrefix("/api");

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
      },
      validationError: {
        target: false
      }
    }));

  const port = process.env.PORT || 5000;
  console.log(`Server is running on port ${port}`)
  await app.listen(port);
}
bootstrap();
