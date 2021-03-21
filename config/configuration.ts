import { registerAs } from '@nestjs/config';

export default registerAs('config_dev', () => ({
  port: parseInt(process.env.HTTP_PORT, 10) || 3000,
  db: {
    str_conn: process.env.DB_STR_CONNECT,
  },
}));
