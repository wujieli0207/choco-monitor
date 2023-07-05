import { RedisModuleOptions } from '@apitable/nestjs-redis';

export const redisModuleOptions = (): RedisModuleOptions => {
  const { host, port, db, password, tsl } = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    db: parseInt(process.env.REDIS_DB || '0', 10),
    password: process.env.REDIS_PASSWORD,
    tsl: Object.is(process.env.REDIS_SSL_ENABLED, 'true'),
  };

  const redisConfig: RedisModuleOptions = {
    host,
    port,
  };

  if (password) {
    redisConfig.password = password;
  }

  if (db) {
    redisConfig.db = db;
  }

  if (tsl) {
    redisConfig.tls = true as unknown;
  }

  return redisConfig;
};
