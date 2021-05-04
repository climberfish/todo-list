const config = {
  port: Number(process.env.PORT) || 4000,
  environment: {
    production: process.env.NODE_ENV === 'production',
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_DATABASE || 'todolist',
    username: process.env.DB_USERNAME || 'test',
    password: process.env.DB_PASSWORD || 'test',
  },
};

export default config;
