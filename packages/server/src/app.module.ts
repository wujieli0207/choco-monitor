import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { resolve } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'shared/services/config/database.config.service';
import { MonitorModule } from './monitor/monitor.module';
import { RedisModule as ApiTableRedisModule } from '@apitable/nestjs-redis';
import { redisModuleOptions } from 'shared/services/config/redis.config.services';
import { RedisModule } from 'shared/redis/redis.module';

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
    // redis 配置
    ApiTableRedisModule.forRootAsync({
      inject: [ConfigService],
      useFactory: () => redisModuleOptions(),
    }),
    RedisModule,
    MonitorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
