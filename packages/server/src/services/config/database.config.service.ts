import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const { host, port, username, password, database, keepConnectionAlive } = {
      host: process.env.MYSQL_HOST || 'localhost',
      port: parseInt(process.env.MYSQL_PORT as string) || 3306,
      username: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '123456',
      database: process.env.MYSQL_DATABASE || 'choco-monitor',
      keepConnectionAlive:
        !!process.env.MYSQL_KEEP_CONNECTION_ALIVE ||
        this.configService.get<boolean>('MYSQL_KEEP_CONNECTION_ALIVE', true),
    };
    return {
      type: 'mysql',
      host,
      port,
      username,
      password,
      database,
      keepConnectionAlive,
    };
  }
}
