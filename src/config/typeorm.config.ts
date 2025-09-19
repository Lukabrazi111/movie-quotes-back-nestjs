import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'node:path';

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'toor',
    database: process.env.DB_NAME || 'movie_quotes',
    entities: [path.join(__dirname, '..', '**/*.entity{.js,.ts}')],
    migrations: [path.join(__dirname, '..', 'migrations/*{.ts,.js}')],
    synchronize: false,
};

export const AppDataSource = new DataSource(dataSourceOptions);
