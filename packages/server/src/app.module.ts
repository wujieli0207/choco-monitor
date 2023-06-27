import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'shared/services/config/database.config.service';
import { MonitorModule } from './monitor/monitor.module';

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
    MonitorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
