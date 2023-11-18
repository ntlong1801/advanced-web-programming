import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user/user.entity';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'postgres',
  password: '123',
  database: 'AWP_BE',
  synchronize: true,
  entities: [User],
};
