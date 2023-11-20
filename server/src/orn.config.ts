import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user/user.entity';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const db_options = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) ?? 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  ...db_options,
  synchronize: true,
  entities: [User],
};
