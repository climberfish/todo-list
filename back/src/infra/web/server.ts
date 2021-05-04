import rootRouter from '@/interfaces/routes/index.router';
import { json } from 'body-parser';
import cors from 'cors';
import express, { Express } from 'express';

const createServer = (): Express => {
  const app = express();
  app.use(json());
  app.use(cors());

  app.use('/api', rootRouter);
  app.use('/', (_, res) => res.send('Hello World'));
  return app;
};

export default createServer;
