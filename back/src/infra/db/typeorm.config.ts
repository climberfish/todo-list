import config from '@/infra/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const typeormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  entities: ['src/domain/entities/*.ts'],
  migrations: ['@/infra/db/migrations/*.ts'],
  logging: config.environment.production,
  synchronize: true,
};

export default typeormConfig;
