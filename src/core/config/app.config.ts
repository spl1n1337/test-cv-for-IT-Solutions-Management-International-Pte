import { registerAs } from '@nestjs/config';
import { ENV } from './constans/env.constants.js';

export default registerAs('app', () => ({
  name: process.env[ENV.APP_NAME] ?? 'Test App',

  http: {
    host: process.env[ENV.HTTP_HOST] ?? 'localhost',
    port: Number(process.env[ENV.HTTP_PORT] ?? 4000),
  },

  throttle: {
    ttl: Number(process.env[ENV.THROTTLE_TTL] ?? 1000),
    limit: Number(process.env[ENV.THROTTLE_LIMIT] ?? 10000),
  },

  urls: {
    public: process.env[ENV.SERVER_PUBLIC_URL] ?? 'http://localhost:4000',
  },
}));
