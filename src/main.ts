import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 5000;
  console.log(`Server is running on port ${port}`)
  await app.listen(port);
}
bootstrap();
