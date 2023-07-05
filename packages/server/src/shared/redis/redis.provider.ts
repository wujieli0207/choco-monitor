import { Provider } from '@nestjs/common';
import Redis from 'ioredis';
import { redisConfig } from './redis-config.factory';
import { RedisConstants } from 'common/constant/redis';

export type RedisClient = Redis;

export const redisProviders: Provider[] = [
  {
    useFactory: (): RedisClient => {
      return new Redis(
        redisConfig.useFactory(
          RedisConstants.REDIS_CLIENT,
          RedisConstants.REDIS_PREFIX,
        ),
      );
    },
    provide: RedisConstants.REDIS_CLIENT,
  },
];
