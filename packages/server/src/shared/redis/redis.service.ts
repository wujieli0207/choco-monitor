import { RedisClient } from './redis.provider';
import { Inject } from '@nestjs/common';
import { RedisConstants } from 'common/constant/redis';

export class RedisService {
  constructor(
    @Inject(RedisConstants.REDIS_CLIENT) public readonly redis: RedisClient,
  ) {}

  /**
   *
   * @param key
   * @param value
   * @param ex
   * @description 保存 value 至redis
   */
  public async saveValue(key: string, value: string, ex: number | string) {
    this.redis.set(key, value, 'EX', ex);
  }

  /**
   *
   * @param key
   * @description 获取 value
   */
  public async getValue(key: string): Promise<string | null> {
    return this.redis.get(key);
  }
}
