import { join } from 'path';
import { DataSource } from 'typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { typeOrmConfig } from './typeorm.config';

export const AppDataSource = new DataSource({
  ...typeOrmConfig,
  logging: true,
  migrations: [join(__dirname, '..', 'migrations', '*.{ts,js}')],
  migrationsTableName: 'migrations',
} as SqliteConnectionOptions);
