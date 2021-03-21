import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ConfigEnum } from 'config/configuration.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>(ConfigEnum.PORT);
  await app.listen(port);
}
bootstrap();
