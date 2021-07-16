import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: '12345678',
        database: 'pegueleve_db',
        entities: ['dist/**/*.entity.js'],
        synchronize: true,
      }),
  },
];
