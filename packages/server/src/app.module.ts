import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { resolve } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './services/config/database.config.service';

@Module({
  imports: [
    // 环境变量配置
    ConfigModule.forRoot({
      envFilePath: [resolve(__dirname, '../env/.env.defaults')],
      isGlobal: true,
      expandVariables: true,
    }),
    // 数据库配置
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
