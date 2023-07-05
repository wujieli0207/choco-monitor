import { Logger } from '@nestjs/common';
import { RedisConstants } from 'common/constant/redis';
import IORedis = require('ioredis');

export const redisConfig = {
  provide: RedisConstants.REDIS_CONFIG,

  /**
   *
   * @param clientType connection client [sub/pub/client]
   * @param keyPrefix
   */
  useFactory: (clientType: string, keyPrefix: string): IORedis.RedisOptions => {
    const logger = new Logger('RedisAdapterFactory');

    return {
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379', 10),
      db: parseInt(process.env.REDIS_DB || '0', 10),
      password: process.env.REDIS_PASSWORD,
      keyPrefix,
      autoResubscribe: true,
      maxRetriesPerRequest: 1,

      retryStrategy(times: number): number {
        if (times <= 3000) {
          logger.warn(`RedisClient: ${clientType}: retry times: ${times}`);
          return Math.min(times * 1000, 1000);
        }

        logger.error(
          `RedisClient:${clientType}:retryStrategy:RetryTimeExhausted times:${times}`,
        );
      },

      reconnectOnError(err: Error): boolean {
        logger.error(
          `RedisClient: ${clientType}: reconnectOnError`,
          err.message,
          err.stack,
        );
        return false;
      },
    };
  },
};
