import { registerAs } from '@nestjs/config';
import { ENV } from './constans/env.constants.js';

export default registerAs('db', () => ({
  url:
    process.env[ENV.POSTGRES_URI] ??
    'postgresql://root@localhost:26257/test_db?sslmode=disable',
}));
