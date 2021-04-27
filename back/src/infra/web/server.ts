import RootRouter from '@/interfaces/routes/index.router';
import { json } from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';

// const PORT = 4000;

const app = express();
app.use(json());
app.use(cors());

app.use('/api', RootRouter);
app.use('/', (_, res) => res.send('Hello World'));

export default app;
