import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from 'shared/filters/global.exception.filter';
import { HttpResponseInterceptor } from 'shared/interceptor';
import { initSwagger } from 'shared/adapters/adapters.init';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');

  // ===== 注册全局 =====
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new HttpResponseInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  // ===== 注册插件 =====
  initSwagger(app);

  await app.listen(3000);
}
bootstrap();
