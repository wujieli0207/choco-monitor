export class RedisConstants {
  public static readonly CONNECT_TIMEOUT = 15 * 1000;
  public static readonly REDIS_CLIENT = 'REDIS_COMMON_CLIENT';
  public static readonly REDIS_PUBLISHER_CLIENT = 'REDIS_PUBLISHER_CLIENT';
  public static readonly REDIS_SUBSCRIBER_CLIENT = 'REDIS_SUBSCRIBER_CLIENT';
  public static readonly REDIS_PREFIX = 'choco:';

  // redis config factory
  public static readonly REDIS_CONFIG = 'REDIS_CONFIG';
}
